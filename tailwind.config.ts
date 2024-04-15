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
          950: '#2D2D2D',
          900: '#3D3D3D',
          800: '#4C4C4C',

          200: '#D2D2D2',
          100: '#E1E1E1',
          50: '#F0F0F0'
        }
      },
    },
  },
  plugins: [],
};
export default config;
