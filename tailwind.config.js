/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
				barloC: ['Barlow Condensed', 'sans-serif'],
			},
			fontSize: '1.6rem',
			container: {
				center: true,
			},
			fontWeight: {
				w400: '400',
				w700: '700',
			},
			colors: {
				primary: {
					red: 'hsl(0, 100%, 68%)',
				},
				neutral: {
					blue: {
						100: 'hsl(230, 29%, 20%)',
						200: 'hsl(230, 11%, 40%)',
						300: 'hsl(231, 7%, 65%)',
						400: 'hsl(207, 33%, 95%)',
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
}
