/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
}