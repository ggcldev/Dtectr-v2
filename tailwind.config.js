/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			sm: '550px',
			md: '800px',
			lg: '1200px',
			xl: '1440px',
		},
		extend: {
			colors: {
				primaryColor: 'hsl(219, 92%, 52%)',
				secondaryColor: 'hsl(347, 72%, 53%)',
				primaryTextColor: 'hsl(212, 82%, 11%)',
				secondaryTextColor: 'hsl(211, 11%, 56%)',
				greyDark: 'hsl(213, 13%, 86%)',
				greyLight: 'hsl(220, 13%, 95%)',
				primaryDark: 'hsl(0, 0%, 8%)',
				secondaryDark: 'hsl(0, 0%, 21%)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Familjen Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
