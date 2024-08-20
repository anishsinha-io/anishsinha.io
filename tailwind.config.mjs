/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      main: ["Catamaran"],
    },
    extend: {
      colors: {
        offwhite: "#f9f9f9",
        mediumgray: "#5C5D67",
        midnight: "#00111c",
        space: "#061826",
      },
    },
  },
  // plugins: [],
};
