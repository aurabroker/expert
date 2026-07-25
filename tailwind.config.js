/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: '#0f2438',
					900: '#0a1a2b',
					800: '#0f2438',
					700: '#1e3a4c',
					600: '#274a60'
				},
				cyan: {
					DEFAULT: '#1c9dd7',
					light: '#4fb9e8',
					dark: '#127bb0'
				},
				accent: {
					DEFAULT: '#ff7a00',
					dark: '#e56d00'
				},
				ink: '#1a1a1a',
				muted: '#666666'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Sora', 'Inter', 'system-ui', 'sans-serif']
			},
			maxWidth: {
				container: '1200px'
			},
			boxShadow: {
				card: '0 10px 40px -12px rgba(15, 36, 56, 0.25)',
				'card-hover': '0 24px 60px -16px rgba(15, 36, 56, 0.45)'
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				float: 'float 6s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
