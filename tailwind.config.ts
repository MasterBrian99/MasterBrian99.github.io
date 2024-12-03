import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				derby: {
					'50': '#fff7ed',
					'100': '#ffedd4',
					'200': '#fed8aa',
					'300': '#fdbb74',
					'400': '#fb943c',
					'500': '#f97516',
					'600': '#ea5a0c',
					'700': '#c2430c',
					'800': '#9a3512',
					'900': '#7c2e12',
					'950': '#431507'
				},
				mirage: {
					'50': '#f0f7fe',
					'100': '#ddecfc',
					'200': '#c3dffa',
					'300': '#9acbf6',
					'400': '#6bafef',
					'500': '#4890e9',
					'600': '#3373dd',
					'700': '#2a5fcb',
					'800': '#284da5',
					'900': '#264482',
					'950': '#0e1629'
				}
			}
		}
	},

	plugins: [containerQueries]
} satisfies Config;
