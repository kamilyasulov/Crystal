// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {},
	css: ["@/assets/css/main.css"],

	modules: [
		"@vueuse/nuxt",
		"@pinia/nuxt",
		"@nuxtjs/i18n",
		"@nuxtjs/google-fonts",
		"@nuxt/image-edge",
		"@nuxtjs/color-mode",
		"@nuxtjs/html-validator",
	],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
