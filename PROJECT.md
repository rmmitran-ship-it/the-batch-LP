# The Batch — Project Brief

> This is the kickoff doc for Claude Code. Read this first, then `BRAND.md`, then look at `index.html`.

## What this is

**The Batch** is a standalone Sunday cooking club in Barcelona. Twelve people meet once a month, cook five dishes together in three hours, and leave with a week of meals. This repo is the marketing site.

- **Domain (tentative):** thebatch.xx
- **Booking backend:** Luma (external — we just link out to it)
- **Built separately from Rebel Roots** (the founder's other project)
- **Founder / host:** Raluca (Ralu)

## Current state

`index.html` is a complete single-file wireframe (v6) with all 14 photos from Vol 03 embedded as base64. Everything in it works — nav, hero with scrolling ribbon, Graza-style 3-card section, pricing, interactive phone carousel, how-it-works with SVG illustrations, real photos strip, story, testimonials, footer. Scroll through to see what's been decided.

**The wireframe is not production code.** It's a single 1.3MB HTML file. Your job is to turn it into a proper structured project.

## The goal

Build this as a deployable static site on GitHub Pages (or Vercel). Priorities in order:

1. **Preserve the visual design exactly** — don't reinvent the aesthetic
2. **Split the monolithic HTML into components** — header, hero, ribbon, cards, pricing, phone-carousel, kitchen-strip, story, testimonials, footer
3. **Extract photos to `/public/images/`** — stop base64-embedding them
4. **Make it fast** — Lighthouse > 90 on mobile
5. **Deploy to GitHub Pages on push to main**

## Tech stack recommendations

- **Framework:** Astro (best fit — static site, component-based, zero JS by default, perfect for a landing page like this)
- **Styling:** Plain CSS (the wireframe already uses CSS variables, keep that. No Tailwind, no CSS-in-JS)
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml`
- **No frameworks I don't need:** No React, no Next.js, no Vue unless there's a specific reason

If you think a different stack is better, flag it and explain why before building.

## File structure to aim for

```
thebatch/
├── public/
│   └── images/
│       ├── batch-01.jpg ... batch-08.jpg   (from /images in this handoff)
│       └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Ribbon.astro
│   │   ├── HowMealPrepShouldBe.astro     (the Graza 3-card section)
│   │   ├── Pricing.astro
│   │   ├── PhoneCarousel.astro
│   │   ├── HowItWorks.astro
│   │   ├── KitchenStrip.astro
│   │   ├── Story.astro
│   │   ├── Testimonials.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css   (all the CSS variables from the wireframe)
├── BRAND.md
├── PROJECT.md   (this file)
├── README.md
└── astro.config.mjs
```

## Critical behaviours from the wireframe to preserve

1. **Scrolling green ribbon** under the hero — infinite marquee, pauses on hover
2. **Phone carousel** in the "From the last batch" section — auto-cycles every 4s, has swipe arrows and X/✦/♥ buttons, dots indicator, tilted hand-holding-phone SVG
3. **Horizontal scrolling photo strip** in the "From the kitchen" section — with scroll-snap
4. **Hover states on CTAs** — lime darkens, translateY(-2px)
5. **SVG illustrations in How It Works** — all 4 step cards have inline SVG sketches (pot, phone, apron, tote). Keep these as placeholder illustrations until we commission real ones.

## Content management

For now: content is hardcoded in components. Next Vol's date, seats left, etc. need to be editable in one place.

**Simple approach:** Put event data in `src/data/event.json`:
```json
{
  "volNumber": "04",
  "date": "May 17, 2026",
  "shortDate": "May 17",
  "time": "11:00 — 14:30",
  "location": "Poble Nou, BCN",
  "seatsTotal": 12,
  "seatsLeft": 8,
  "lumaUrl": "https://lu.ma/..."
}
```
Components import from this JSON. Before each event, Ralu edits the JSON, commits, site rebuilds.

## What NOT to change without asking

- The **palette** (see BRAND.md section 2) — Peel Club-inspired pastels + saturated accents
- The **type hierarchy** (Titan One / Fraunces / Inter / JetBrains Mono)
- The **manifesto line** — "It's just people cooking together. Like we used to."
- The **3-tier pricing structure** (Solo / Pair / Table of 4 + Early Bird banner)
- The **section order** — it's been iterated carefully

If a better structure emerges, propose it — don't silently change it.

## What to improve proactively

- Responsive behaviour (wireframe works but could be smoother on small tablet)
- Image optimisation (serve WebP, use `<picture>` with srcset)
- Accessibility (ARIA labels on the phone carousel buttons, alt text on photos)
- SEO basics (meta tags, Open Graph cards per page, sitemap)
- A real favicon (the interim one in the wireframe is just the title tag)
- 404 page

## The 6 real photos in `/images`

These are from Vol 03 (Poble Sec, April 2026). Use them wherever photos are shown:

- `batch-01.jpg` — Spring onions, eggs, orange fleece (prep shot, hero candidate)
- `batch-02.jpg` — Trays of beans, eggs, asparagus (the spread)
- `batch-03.jpg` — Wide kitchen, green knife, recipe cards (atmosphere)
- `batch-04.jpg` — Spinach mountain (ingredient close-up)
- `batch-05.jpg` — Grating cheese POV (hands at work)
- `batch-06.jpg` — Plating tupperware (take-home moment)
- `batch-07.jpg` — Yellow board, rainbow chard (use in Graza card 2 if you want)
- `batch-08.jpg` — Pumpkin tray, wide kitchen (for phone carousel or About)

## Commands I expect to run

```bash
npm install
npm run dev        # local preview
npm run build      # static build to /dist
npm run preview    # preview production build
```

## Git workflow

- `main` = production (auto-deploys to GitHub Pages)
- Feature branches: `feat/hero-refactor`, `feat/phone-carousel`, etc.
- PRs into main, squash merge
- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`)

## First PR I want to see

Split the wireframe into Astro components WITHOUT changing any visual output. I want to load the site locally and have it look pixel-identical to `index.html`. Once that's proven, we iterate.

## Open questions (ask me when you hit them)

- Do we need a `/vol-[n]` page per event, or does the single landing page stay evergreen and just update via the JSON?
- Where does the booking flow live? (Probably all on Luma, but confirm)
- Do we need an email list signup anywhere? (Not in the current wireframe)
- Analytics tool? (Plausible? Umami? None?)

---

## Summary for Claude Code on first read

1. Read `BRAND.md`
2. Open `index.html` in a browser — this is the current state
3. Look at `/images/` — these are the real event photos
4. Propose your refactor plan (framework, folder structure, first few components) as a response before building
5. Wait for approval, then execute

Don't rebuild the design. Don't reinvent the copy. Don't add tooling for the sake of it. Ship the wireframe as a clean, fast, structured site.
