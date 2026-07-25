import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$data: 'src/lib/data'
		},
		prerender: {
			// Brakująca grafika nie powinna przerywać całego builda.
			handleHttpError: 'warn'
		}
	}
};

export default config;
