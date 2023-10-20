import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0px 0px 4px 0px #00000040",
        md: "0px 4px 4px 0px #0000001A",
        lg: "0px 4px 4px 3px #E7E7E740",
        xl: "0px 4px 4px 0px #E7E7E740",
      },
      colors: {
        primary: {
          DEFAULT: "#488C02",
          50: "#E8FBD4",
          100: "#BEF289",
          200: "#82D82A",
          300: "#5DB403",
        },
        secondary: {
          DEFAULT: "#3A494E",
          50: "#79A7B7",
          100: "#658895",
          200: "#597883",
          300: "#4F6B74",
        },
        "sub-text": {
          DEFAULT: "#989292",
          50: "#F9F9F9",
          100: "#EEEEEE",
          200: "#E3D5D5",
          300: "#C1B6B6",
        },
        "data-text": {
          DEFAULT: "#6A6A6A",
          50: "#DEDEDE",
          100: "#C6C6C6",
          200: "#B4B4B4",
          300: "#969696",
        },
        line: {
          DEFAULT: "#EAEAEA",
          50: "#E1DDDD",
          100: "#D2D2D2",
          200: "#B9B9B9",
          300: "#979797",
        },
        grey: {
          DEFAULT: "#F1F1F1",
          50: "#DADADA",
          100: "#D0CDCD",
          200: "#C1BDBD",
          300: "#A8A1A1",
        },
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.813rem", // 13px
        base: "0.938rem", // 15px
        xl: "1.25rem", //20px
        "2xl": "1.563rem", // 25px
        "3xl": "1.953rem", // 31px
        "4xl": "2.441rem", // 40px
        "5xl": "3.125rem", //50px
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
