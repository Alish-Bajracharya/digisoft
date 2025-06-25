/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      fadeIn: "fadeIn 1s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },

  fontFamily: {
      worksans: ['"Work Sans"', 'sans-serif'],
    },
    boxShadow: {
      card: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
  },
  plugins: [],
  
},

};
