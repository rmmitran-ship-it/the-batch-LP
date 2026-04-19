import { defineConfig } from 'astro/config';

// When we move to a custom domain (e.g. thebatch.lol), change `site` to the
// final URL and set `base: '/'`. For now we deploy to the GitHub Pages project
// path: https://rmmitran-ship-it.github.io/the-batch-LP/
export default defineConfig({
  site: 'https://rmmitran-ship-it.github.io',
  base: '/the-batch-LP',
  trailingSlash: 'ignore',
});
