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
      "primary-color": "#5B45F8",
      "headings-black": "#494850",
      gray: "#9795B5",
      color: {
        200: "#FAFAFF",
        300: "#F9F9FF",
        400: "#F2F1FA",
        500: "#E7E6F2",
        600: "#D4D2E3",
        700: "#BCBACD",
        800: "#ADABC3",
        900: "#8D8BA7",
        1000: "#767494",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      spacing: {
        height_footer: "28rem", // 448 pixels
        x_padding_page: "9rem", // 112 pixels
        y_padding_page: "5rem",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};
