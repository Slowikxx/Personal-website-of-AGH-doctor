import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				piazzolla: ['Piazzolla', 'serif'],
				petrona: ['Petrona', 'serif'],
			},
			colors: {
				lightBlue: '#5B93C6',
			},
		},
	},
	plugins: [],
};
export default config;
