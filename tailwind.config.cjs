/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				neonGreen: '#A4FFAF',
				darkGray: '#24232C',
				lightGray: '#817D92',
				jetBlack: '#18171F',
				weakRed: '#F64A4A',
				weakOrange: '#FB7C58',
				mediumYellow: '#F8CD65',
			},
			fontFamily: {
				sans: ['JetBrainsMono', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
