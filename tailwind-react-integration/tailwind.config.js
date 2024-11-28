/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Combine purge here
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    // This section is no longer used in newer Tailwind versions
    extend: {},
  },
  plugins: [],
};
