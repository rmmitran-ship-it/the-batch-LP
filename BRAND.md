# BRAND.md — The Batch

> Source of truth for all design and copy decisions. Claude Code: read this file before generating any UI, copy, or asset. Follow these rules unless the user explicitly overrides them in-conversation.
>
> **v1.1 (Apr 2026)** — palette realigned with the `index.html` wireframe (Peel Club-inspired). Legacy tokens `--tomato`, `--bg-orange`, `--bg-sage`, `--bg-alt`, `--bg` have been retired. See §11 for the full changelog.

---

## 0. The brand in one paragraph

The Batch is a monthly Sunday cooking club in Barcelona. Twelve people meet in a kitchen, cook five dishes together in three hours, and leave with a week of meals. It's a small rebellion against how lonely eating well has become. The brand feels editorial, confident, warm, and a bit cheeky — fat rounded type on soft pastel backgrounds, punctuated by lime green, hot orange, and burgundy. No corporate, no cutesy, no cluttered.

---

## 1. Typography

### 1.1 Fonts

**Display · Titan One** (Google Fonts, free)
- Used for: all headings, wordmark, CTAs, eyebrows, numbers, badges
- Why: chunky, rounded, slightly condensed — carries the brand personality
- Import: `https://fonts.googleapis.com/css2?family=Titan+One&display=swap`

**Body · Inter** (Google Fonts, free)
- Used for: paragraphs, buttons, navigation, UI labels
- Weights: 400, 500, 600, 700
- Import: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

**Accent · Fraunces Italic** (Google Fonts, free)
- Used for: italic serif accents inside display headings, pull quotes, testimonials, meta labels
- Weight: 400 italic (also 500/600 available for longer passages)
- Import: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,400&display=swap`

**Accent · JetBrains Mono** (Google Fonts, free)
- Used for: Graza-card taglines **only** (the 3-card "Meal prepping the way it should be" section). Typewriter feel, reinforces the editorial-menu-card metaphor.
- Weight: 400 (500 allowed sparingly)
- Never use for: body copy, buttons, nav, headings, anywhere else. One section only.
- Import: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap`

**Never use:** Arial, Helvetica, system fonts, Roboto, Open Sans, Comic Sans, any script/cursive fonts.

### 1.2 Display type rules

All display text (Titan One) follows these rules:

- `text-transform: uppercase`
- `line-height: 0.85–0.88` (tight stack)
- `letter-spacing: -0.02em` (tight, confident)
- Always render at `font-weight: 400` (Titan One has no other weights)

When display headings need an italic serif accent inside them:

- Use Fraunces 400 italic
- Colour it `--burgundy` against pink/cream/butter/blue backgrounds
- Colour it `--lime` against ink/black backgrounds
- Lowercase, NO `text-transform: uppercase`
- Keep the period/full-stop attached to the italic word

Example pattern:
```html
<h2 class="title">Pick your <em>seat.</em></h2>
```
```css
.title { font-family: 'Titan One'; text-transform: uppercase; }
.title em {
  font-family: 'Fraunces';
  font-style: italic;
  color: var(--burgundy);
  text-transform: none;
}
```

### 1.3 Type scale

| Token | Size (clamp) | Use case |
|---|---|---|
| `--h-hero` | `clamp(96px, 18vw, 260px)` | Hero wordmark, footer CTA |
| `--h-xl` | `clamp(56px, 8vw, 120px)` | Section titles (Pricing, How it works, Past batches) |
| `--h-lg` | `clamp(44px, 6vw, 80px)` | Sub-section titles, story title |
| `--h-md` | `clamp(24px, 3vw, 42px)` | Card titles, pill text |
| `--h-sm` | `20px` | Step titles, tier names |
| `--body` | `16px` | Paragraphs |
| `--body-sm` | `14px` | UI labels, buttons |
| `--caption` | `12px` | Meta labels, captions |
| `--eyebrow` | `10–11px` | Section tags, eyebrows (always uppercase, letter-spaced) |

---

## 2. Colour system

### 2.1 Core palette (CSS variables)

Canonical. The wireframe is the source of truth — these values live in `src/styles/tokens.css` and any change to the palette happens there first, then this doc is updated to match.

```css
:root {
  /* Pastel backgrounds (the grounds) */
  --bg-pink:   #f7c9cc;
  --bg-butter: #f5efb9;
  --bg-blue:   #c5dce8;
  --bg-cream:  #faf3d4;

  /* Saturated accents (the "pops") */
  --hot-orange: #ff4f1a;
  --lime:       #c9d93d;
  --lime-dark:  #a8b832; /* hover state only */
  --burgundy:   #a81e4a;
  --hot-pink:   #ff7a9c;

  /* Ink */
  --ink:      #1a1a1a;
  --ink-soft: #3a3a3a;

  /* Photo stone neutral (Graza-card placeholders) */
  --stone:      #e8e0d0;
  --stone-dark: #c8c0b0;

  /* Panel / cream surface */
  --panel: #fcf8ea;
  --cream: #fcf8ea;
}
```

**Retired (do not re-introduce):** `--bg`, `--bg-alt`, `--bg-sage`, `--bg-orange`, `--tomato`. These were legacy aliases from a pre-wireframe palette. Any old copy-paste that uses them should be updated to the canonical name.

### 2.2 Colour usage rules

**Background = always one of the four pastel grounds, never pure white.**

Section-background rotation:
- Pink (`--bg-pink`) — hero, most-common default, nav bar
- Blue (`--bg-blue`) — "Meal prepping the way it should be" Graza section
- Butter (`--bg-butter`) — past batches, secondary sections
- Cream (`--bg-cream`) — pricing, story
- Ink (`--ink`) — footer CTA only

**Never on the same section:**
- Lime on pink (visual vibration)
- Hot-pink on hot-orange (clash)
- Burgundy on butter (muddy)

**Accents, use sparingly:**
- `--hot-orange` — hero wordmark, primary "look at me" accent (used once, big)
- `--lime` — ribbon background, CTAs, badges ("Most booked"), section highlights
- `--lime-dark` — hover state for lime buttons only, nowhere else
- `--burgundy` — italic serif accents inside headings, PS label in hero, testimonial stars
- `--hot-pink` — starburst badge (scarcity callouts). Max one per page.

### 2.3 Volume rotation (per event)

Each Vol rotates its primary colour pair to keep the IG grid feeling like a collection, not repetition. Suggested default rotation:
- Vol 04 — Pink ground + hot-orange hero wordmark
- Vol 05 — Butter ground + burgundy hero wordmark
- Vol 06 — Blue ground + hot-orange hero wordmark
- Vol 07 — Cream ground + burgundy hero wordmark

Ground + wordmark only rotate. Accents (lime, hot-pink) stay constant.

---

## 3. Logo rules

### 3.1 Primary wordmark

Two lines, stacked: `THE` / `BATCH`. Both in Titan One, coloured `--hot-orange` on pastel grounds.

```html
<div class="logo">
  <span class="logo-line">THE</span>
  <span class="logo-line">BATCH</span>
</div>
```

```css
.logo {
  font-family: 'Titan One', sans-serif;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.02em;
  text-align: center;
  display: inline-block;
  color: var(--hot-orange);
}
.logo-line { display: block; }
```

### 3.2 Horizontal lockup (for nav only)

Single line: `THE BATCH`. Same font, no stacking, coloured `--ink`.

### 3.3 Rules

**Do:**
- Render at 20px+ for horizontal, 40px+ for stacked
- Keep at least 0.5× the cap-height as clear space around the mark
- Use only the approved wordmark/ground combos from §2.3

**Don't:**
- Rotate, skew, stretch, or distort
- Add drop shadows, gradients, outlines
- Place on busy photos without a solid colour backdrop
- Use at sizes below 20px (use "TB" monogram instead — to be designed)

### 3.4 Production note

Titan One is the interim font. For the final logo, consider commissioning a custom hand-drawn wordmark from an illustrator (~€200–500) so it's fully ownable. Paid alternative: Mattone (Pangram Pangram, ~$50) — closest commercial match.

---

## 4. UI components

### 4.1 Buttons

**Primary (hero CTA)** — lime pill with ink border
```html
<a class="btn-primary">Book the next batch <span>→</span></a>
```
```css
.btn-primary {
  background: var(--lime);
  color: var(--ink);
  font-family: 'Fraunces', serif;
  font-weight: 500;
  padding: 14px 30px;
  border-radius: 60px;
  border: 2px solid var(--ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, background 0.2s;
}
.btn-primary:hover { background: var(--lime-dark); transform: translateY(-2px); }
```

**Nav book button** — compact ink pill
```css
.nav-book {
  background: var(--ink);
  color: var(--cream);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 40px;
}
```

**Ghost** — outlined, no fill
```css
.btn-ghost {
  border: 1.5px solid var(--ink);
  color: var(--ink);
  background: transparent;
  padding: 16px 24px;
  border-radius: 60px;
  font-weight: 600;
  font-size: 14px;
}
```

**On dark (ink) backgrounds** — lime pill
```css
.btn-on-dark {
  background: var(--lime);
  color: var(--ink);
  /* rest same as btn-primary */
}
```

### 4.2 Pills & tags

**Section tag** (eyebrow above headings)
```css
.section-tag {
  background: var(--ink);
  color: var(--panel);
  font-family: 'Titan One';
  font-size: 11px;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: 40px;
  text-transform: uppercase;
}
```

**Badge** (on cards — "Most booked", "Best value")
```css
.badge {
  background: var(--lime);
  color: var(--ink);
  font-family: 'Titan One';
  font-size: 10px;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 40px;
  text-transform: uppercase;
}
```

**Hero ribbon** (full-bleed lime marquee under the hero)
```css
.hero-ribbon {
  background: var(--lime);
  border-top: 2px solid var(--ink);
  border-bottom: 2px solid var(--ink);
  padding: 14px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
```
The ribbon auto-scrolls (30s linear loop), pauses on hover, and respects `prefers-reduced-motion`.

### 4.3 Cards

**Default card** — cream panel
```css
.card {
  background: var(--panel);
  border-radius: 12px;
  padding: 32px 28px;
}
```

**Featured card** — ink/black panel
```css
.card-featured {
  background: var(--ink);
  color: var(--panel);
  border-radius: 12px;
  padding: 32px 28px;
}
```

All cards: `border-radius: 12px`. No borders by default — contrast is created by the parent section's ground colour.

### 4.4 Starburst / sticker (special use)

Used on photos for scarcity/punchy callouts. Hot-pink, tilted, uppercase.
```css
.starburst {
  background: var(--hot-pink);
  color: var(--ink);
  font-family: 'Titan One';
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 16px;
  transform: rotate(-8deg);
  clip-path: polygon(...); /* 16-point star */
}
```

Use sparingly — max one per page.

---

## 5. Layout rules

- **Max width:** `1400px` for content, `100%` for backgrounds
- **Section padding:** `100px 40px` desktop, `60px 20px` mobile
- **Grid gap:** `28px` for card grids, `20px` for pricing tiers, `12px` for photo strips
- **Border radius:** `12–14px` cards, `40–60px` pills/buttons, `8px` photos, `4px` inputs
- **Mobile breakpoint:** `900px` (switch card/tier/step grids to `1fr`, hide `.nav-links`)

---

## 6. Voice & tone

### 6.1 Voice principles

1. **Warm but direct.** "Cook together, eat all week." Not: "Join our transformative culinary community journey."
2. **Confident, not cute.** "Meal prep is broken." Not: "Hey friends! Meal prepping solo is kinda sad, right?"
3. **Specific over vague.** "Five dishes, three hours, twelve seats." Not: "A fun, immersive experience."
4. **Honest about what it is.** A Sunday cooking club. Not: "A wellness-forward gastronomic movement."
5. **A little cheeky.** "Finally, a Sunday thing that isn't brunch." Light humour is welcome.

### 6.2 Words we use

- batch, crew, table, seat, host, pot, spread, tupperware
- cook together, eat all week, sunday, gather, break bread
- km 0, protein-forward, fresh, local
- vol 01, vol 02 (volume/edition numbers)

### 6.3 Words we avoid

- networking, workshop, attendee, participant, class
- immersive, transformative, curated, bespoke, elevated
- journey, experience, movement, community (overused, empty)
- guys, foodie, foodies, yummy
- emojis in headings (sparing use in body copy only)

### 6.4 Tagline options

Primary: **"It's just people cooking together. Like we used to."**
Secondary: "A sunday cooking club · Barcelona"
Short: "The batch."

### 6.5 CTA wording

- Primary: "Book the next batch", "Book a seat", "Book solo / Book pair / Book table"
- Secondary: "See the menu", "See past batches", "Read the story"
- Never: "Click here", "Learn more", "Submit", "Sign up now!"

### 6.6 Section header patterns

Format: `[short command or statement]. <em>[italic serif twist].</em>`

Examples:
- "Pick your *seat.*"
- "Meal prepping the way *it should be.*"
- "From the *last batch.*"
- "What the *crew says.*"
- "See you *at the table.*"
- "Cook together, *eat all week.*"

---

## 7. Content patterns

### 7.1 Event meta

Always show in this order: Date · Time · Location · Spots left. Use the pattern:

```
Sun · May 17, 2026 · 11:00–14:30 · Poble Nou, BCN · 8 seats left
```

Use interpunct `·` as separator, never pipe `|` or hyphen `-`. Source values from `src/data/event.json` — never hardcode.

### 7.2 Pricing tiers

Always three tiers, in this order: Solo / Pair / Table of 4. Middle (Pair) is the featured one. Early bird is a separate time-limited banner above the tiers, not a fourth tier. Prices live in `event.json` as `prices.solo / prices.pair / prices.tableOfFour`, each with `full` and `earlyBird` values.

### 7.3 Testimonials

- 3 per section, middle card is the featured (ink) variant
- 5 stars in burgundy
- Quote in Fraunces italic
- Author: [FIRST NAME] · Vol [number] · [Solo/Pair/Table]

---

## 8. Assets checklist

**Needed for v1 launch:**
- [ ] Logo files (SVG primary stacked, SVG horizontal, PNG variants)
- [x] 8 past event photos (in `public/images/batch-01.jpg` through `batch-08.jpg`)
- [ ] 1–2 past event reels (vertical, 9:16, 5–15s each)
- [ ] Portrait of Ralu in the kitchen (4:5 ratio)
- [ ] Hero photo (5:3 ratio, hands over table of ingredients) — candidate: `batch-01.jpg`
- [ ] 4 step illustrations for "How it works" (interim SVG sketches live in the wireframe)
- [ ] Favicon (32×32, 192×192)
- [ ] Open Graph image (1200×630)

**Needed for v2:**
- [ ] Commissioned hand-holding-phone illustration (for past batches section)
- [ ] Custom wordmark (replacing Titan One)
- [ ] Recipe card template
- [ ] Tote bag mockup

---

## 9. File structure

Canonical layout (Astro). Components are `.astro` files with scoped styles.

```
the-batch-LP/
├── public/
│   └── images/            # batch-01.jpg … batch-08.jpg, favicon.svg (tbd)
├── src/
│   ├── components/        # Nav, Hero, Ribbon, Pricing, etc.
│   ├── data/
│   │   └── event.json     # vol, date, seats, prices, Luma URL
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── tokens.css     # :root variables (source of truth)
│       └── global.css     # resets, body, global media query
├── .github/workflows/deploy.yml
├── BRAND.md               # this file
├── PROJECT.md             # contributor brief
├── ANALYTICS.md           # tracking plan
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 10. Things Claude Code should NEVER do

- Generate text that uses the forbidden words in §6.3
- Use Tailwind's default font stack — always import the specified Google Fonts
- Default to white backgrounds — always use one of the four `--bg-*` tokens
- Use purple gradients, glassmorphism, neumorphism, or any 2020-era generic UI patterns
- Add emoji to headings or CTAs
- Re-introduce retired tokens (`--tomato`, `--bg-orange`, `--bg-sage`, `--bg-alt`, `--bg`)
- Create pricing tiers outside the Solo / Pair / Table of 4 structure without asking
- Change the tagline "It's just people cooking together. Like we used to." without asking
- Use stock photography — all photos are from real batches or commissioned
- Hardcode event date/seats/prices in components — always source from `src/data/event.json`

---

## 11. Version / changelog

- **v1.1** — Apr 2026. Palette realigned with `index.html` wireframe (Peel Club-inspired). Added `--hot-orange`, `--bg-blue`, `--bg-cream`, `--burgundy`, `--ink-soft`, `--stone`, `--stone-dark`, `--panel`, `--cream`, `--lime-dark`. Retired `--tomato`, `--bg-orange`, `--bg-sage`, `--bg-alt`, `--bg` (old aliases). Added JetBrains Mono to typography (Graza-card taglines only). Updated Vol rotation examples. Updated tagline to match wireframe ("It's just people cooking together. Like we used to.").
- **v1.0** — Apr 2026. Initial brand kit for launch. Logo font: Titan One (interim).
- **Next review:** after Vol 05 (post-launch feedback).
