/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.ejs'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors:{
				primary: '#68a063',
			}
		},
	},
	plugins: [],
};
