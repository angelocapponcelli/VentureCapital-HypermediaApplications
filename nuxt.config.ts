// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/general.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase"],
  ssr: true,
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" }, //import from google font
        { rel: "preconnect", href: "https://fonts.gstatic.com" }, //import from google font
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap", //import from google font
        },
      ],
    },
  },
});
