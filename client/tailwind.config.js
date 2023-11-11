/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-lime": "linear-gradient(to top, #89F09C 0%, #3CC755 100%)"
			}
		},
		colors: {
			"DEFAULT": "#000000",
			"green": {
				500: "#A5D364",
				600: "#8BB43C"
			},
			"red": {
				"light": "#FF8585"
			}
		},
		container: {
			center: true,
			padding: "15px"
		}
	},
	plugins: [],
}

