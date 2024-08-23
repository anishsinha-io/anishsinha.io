/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      main: ["Catamaran"],
      mono: ["JetBrains Mono"],
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        offwhite: "#f9f9f9",
        mediumgray: "#5C5D67",
        midnight: "#121214",
      },
    },
  },
};
