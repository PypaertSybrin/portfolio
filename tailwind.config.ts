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
          light: '#B7C5FF',
          neutral: '#91A7FF'
        },
        secundary: {
          950: '#1F1F1F',
          900: '#2F2F2F',
          800: '#3F3F3F',

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
