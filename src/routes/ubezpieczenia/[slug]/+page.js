import { error } from '@sveltejs/kit';
import { services, serviceDetails } from '$data/content.js';

export const prerender = true;

// Prerenderuj podstronę dla każdego ubezpieczenia.
export function entries() {
	return services.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) {
		throw error(404, 'Nie znaleziono takiego ubezpieczenia');
	}
	return {
		service,
		detail: serviceDetails[params.slug] ?? null,
		related: services.filter((s) => s.slug !== params.slug).slice(0, 3)
	};
}
