/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': { max: '600px' },
      // => @media (max-width: 640px) { ... }

      'md': { max:'768px' },
      // => @media (max-width: 768px) { ... }

      'lg': { max:'1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    colors:{
      "blue": "#1a1e49",
      "gray": "#38383b",
      'altBlack': '#262525',
    },
    extend: {
      backgroundImage:{
        'my-image':"url(/src/assets/Nozzle.jpg)",
      }
    },
  },
  plugins: [],
}

