import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        soleil: ["soleil", "sans-serif"],
      },
      colors: {
        primary: {
          neutral: '#728FFF',
          dark: '#3A61FF'
        },
        secundary: {
          950: '#1F1F1F',
          900: '#2F2F2F',
          800: '#3F3F3F',
          700: '#4F4F4F',

          400: '#AFAFAF',
          300: '#BFBFBF',
          200: '#CFCFCF',
          100: '#DFDFDF',
          50: '#EFEFEF'
        }
      },
    },
  },
  plugins: [],
};
export default config;
