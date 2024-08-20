import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: "var(--font-montserrat)",
      poppins: "var(--font-poppins)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
        colors: {
          'maroon': '#5D001E',
          'platinum': '#E3E2DF',
          'blossom': '#E3AFBC',
          'berry': '#9A1750',
          'pink': '#EE4C7C',
          'blue': '#2B86FF',
          'dark-blue': '#16215c',
          'purpel': '#8C47C5'
        },
    },
  },
  plugins: [],
};
export default config;
