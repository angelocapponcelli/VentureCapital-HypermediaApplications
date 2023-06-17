/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // custom color palette
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "primary-color": "#5B45F8",
      "headings-black": "#494850",
      gray: "#9795B5",
      red: "#ff0000",
      color: {
        200: "#FAFAFF",
        300: "#F9F9FF",
        400: "#F2F1FA",
        500: "#E7E6F2",
        600: "#D4D2E3",
        700: "#BCBACD",
        800: "#ADABC3",
        850: "#747396",
        900: "#55546E", //"#8D8BA7",
        1000: "#514F63", //"#767494",
        red: "#FF2E2E",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      spacing: {
        x_padding_page: "9rem",
        y_padding_page: "5rem",
        y_padding_title_text: "0.875rem",
        x_padding_page_mobile: "1rem",
        y_padding_page_mobile: "1rem",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};
