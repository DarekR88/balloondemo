import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cOne": "var(--cOne)",
        "cTwo": "var(--cTwo)",
        "cThree": "var(--cThree)",
        "cFour": "var(--cFour)",
        "cFive": "var(--cFive)",
        "cSix": "var(--cSix)",
        "cSeven": "var(--cSeven)",
        "cEight": "var(--cEight)",
        "cBOne": "var(--cBOne)",
        "cBTwo": "var(--cBTwo)",
        "cBThree": "var(--cBThree)",
        "cBFour": "var(--cBFour)",
        "cBFive": "var(--cBFive)",
        "cBSix": "var(--cBSix)",
        "cBSeven": "var(--cBSeven)",
        "cBEight": "var(--cBEight)",
      },
      fontFamily: {
        Dancing: ["Dancing Script", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Chewy: ["Chewy", "sans-serif"],
        Tilt: ["Tilt Neon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
