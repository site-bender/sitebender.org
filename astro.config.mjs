import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import sitebenderTheme from "./sitebender.theme.dark.json"

const ignore = []

// ignore unused exports
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		sitemap({
			canonicalURL: "https://sitebender.org/",
			filter: page => !ignore.includes(page),
			lastmod: new Date(),
		}),
	],
	markdown: {
		shikiConfig: {
			theme: sitebenderTheme,
		},
	},
	site: "https://sitebender.org/",
})
