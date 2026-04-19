# The Batch

A Sunday cooking club in Barcelona. Twelve people, one kitchen, five dishes, three hours. Everyone leaves with a week of meals.

Marketing site — live at [rmmitran-ship-it.github.io/the-batch-LP](https://rmmitran-ship-it.github.io/the-batch-LP/) *(custom domain pending)*

## Development

```bash
npm install
npm run dev      # local preview at localhost:4321
npm run build    # build static site to /dist
npm run preview  # serve the built site locally
```

## Project docs

- **`PROJECT.md`** — brief for contributors, what to build and why
- **`BRAND.md`** — design + voice + typography + colour rules (v1.1 aligned with the wireframe palette)
- **`ANALYTICS.md`** — why Umami, what we track, what we don't

## Content updates

Event details (date, seats left, prices) live in `src/data/event.json`. Edit, commit, site rebuilds automatically via GitHub Actions.

## Deploy

Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml` — **pending**: the workflow file lives in `.github-pending/deploy.yml` and needs to be moved into `.github/workflows/` before the first deploy can run. This extra step exists because the scaffolding OAuth token didn't have `workflow` scope. Fix once, either by:

```bash
gh auth refresh -s workflow
mv .github-pending/deploy.yml .github/workflows/deploy.yml
git add .github/workflows/deploy.yml && git rm -r .github-pending
git commit -m "chore: enable GitHub Pages deploy workflow" && git push
```

...or by creating `.github/workflows/deploy.yml` directly in the GitHub web UI with the contents of `.github-pending/deploy.yml`.

When a custom domain is set up: change `site` and `base` in `astro.config.mjs` (set `base: '/'`), add `public/CNAME` with the domain.

---

Built in Barcelona.
