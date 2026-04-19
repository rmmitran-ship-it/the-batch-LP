# ANALYTICS.md — The Batch

> Tracking plan for `thebatch` marketing site. Privacy-first, cookieless, minimal. If an event isn't on this list, it isn't tracked.

---

## Tool: Umami Cloud

**Why Umami:**
- Cookieless → no consent banner needed in the EU
- GDPR-compliant out of the box, no personal data collected
- Free tier covers up to 10k monthly events — plenty for a small cooking-club site
- Clean, shareable public dashboards (match the brand's editorial tone)
- No vendor lock-in: if we outgrow the free tier or want to self-host, the exported data is standard JSON

**Migration path:**
If we outgrow Umami's free tier, the next step is **Plausible** (paid, starts ~$9/mo). Both tools track the same event model; migration is a script tag swap + an event-name remap.

**Rejected alternatives:**
- Google Analytics — requires cookie banner, bloats page weight, conflicts with the brand's "small rebellion" tone
- Fathom — good tool but more expensive than Plausible at the same tier
- Self-hosted Umami — not worth the ops overhead until we're clearly going to stay with the product long-term

---

## Events we track

All events fire client-side. Identifiers below are the literal strings used in `data-umami-event` attributes and manual `umami.track()` calls.

| Event | When it fires | Properties |
|---|---|---|
| `page_view` | Default — every route load | `url`, `referrer` (Umami built-in) |
| `book_cta_click` | Click on any "Book" CTA | `location`: `hero` \| `nav` \| `pricing_solo` \| `pricing_pair` \| `pricing_table` \| `footer` |
| `outbound_luma` | Click on any link to `lu.ma/*` (the real conversion event) | `source`: same values as `book_cta_click.location` |
| `scroll_depth` | User reaches 25 / 50 / 75 / 100 % of page height | `depth`: `25` \| `50` \| `75` \| `100` |

`book_cta_click` and `outbound_luma` will overlap on most clicks — that's intentional. The first measures *intent* (clicked the button), the second measures *actual navigation to Luma* (the booking surface). If the two diverge, it usually means Luma is down or the URL is broken.

### Implementation notes

- **CTA clicks:** rely on Umami's `data-umami-event` / `data-umami-event-*` HTML attributes. Already wired into `Nav.astro` and `Hero.astro`. Repeat the pattern for the pricing tiers and footer.
- **Outbound Luma:** global listener in `BaseLayout.astro` (TBD) — catches any click on an `<a href="https://lu.ma/*">` and fires `outbound_luma` with the nearest CTA label as `source`.
- **Scroll depth:** small inline script in `BaseLayout.astro` (TBD) using `IntersectionObserver` on sentinel divs at 25/50/75/100 %.

---

## Events we do NOT track

Deliberately, and not for lack of capability:

- **Session recordings / heatmaps / replay tools** (Hotjar, FullStory, etc.) — never. Privacy-hostile, not worth the trust cost.
- **Personal data of any kind** — no names, emails, IPs (Umami anonymises these by default, we won't undo that).
- **Testimonial / section interactions** — hover states, section reveals, carousel navigation. Noise.
- **Micro-interactions** — ribbon pause on hover, tier-card hovers, etc. Noise.
- **A/B tests** — not for v1. Traffic isn't high enough for statistical significance; premature optimisation.

---

## Setup checklist

- [ ] Create Umami Cloud account at [cloud.umami.is](https://cloud.umami.is)
- [ ] Add site with the final production hostname (gh-pages subdomain or custom domain)
- [ ] Grab the `data-website-id` from Umami and paste into `BaseLayout.astro` (the commented `<script>` block)
- [ ] Verify `page_view` fires on deploy
- [ ] Click each `book_cta_click` surface, confirm all 6 `location` values appear in the Umami events table
- [ ] Set up a saved report for weekly `outbound_luma` counts (the North Star)

---

## Review cadence

After every Vol (monthly). If we need more than 5 minutes to read the dashboard, we're tracking too much — cut events, don't add them.
