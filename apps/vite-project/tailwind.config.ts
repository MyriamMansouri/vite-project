import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', "../../packages/ui/src/**/*.{js,ts,svelte}"],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
