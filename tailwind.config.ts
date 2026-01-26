import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#2d5f3f',
          light: '#4a9d6d',
          accent: '#6bc491',
        },
        gray: {
          dark: '#2c3e50',
          medium: '#5a6c7d',
          light: '#95a5a6',
          bg: '#f4f6f8',
        },
      },
    },
  },
  plugins: [],
};
export default config;
