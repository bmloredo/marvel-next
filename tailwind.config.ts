import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-30px)" },
        },
      },
      animation: {
        wiggle: "wiggle",
      },
    },
  },
  plugins: [],
};
export default config;
