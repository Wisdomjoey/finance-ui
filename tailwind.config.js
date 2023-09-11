/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			theme_black: "#121212",
			theme_green: "#dcff52",
			lighter_black: "#e5e5e5",
			text_color: "gray",
		},
		screens: {
			xs: {max: "480px"},
			mobile: {min: "200px", max: "480px"},
			sm: {max: "768px"},
			md: {max: "1024px"},
		},
	},
	plugins: [],
};

