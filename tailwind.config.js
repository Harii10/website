/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
      chose:{
        '10': '#2563EB',
        '20': '#689BEA'
      }
    },
    },
  },
  plugins: [],
}

