/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3490dc",
          "secondary": "#ffed4a",
          "accent": "#38c172",
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#fbbf24",
          "error": "#ef4444",
          "purpleMix": "#800080",
          "navy":"#000b58",
          "navyMix":"#091057",
          "navyMixx":"#210062",
          "navyMixxx":"#211951",
          "darkMix":"#0f172a",
          "lightMix":"#f0f4f8",
          "darkGray":"#333333",
          "blueMix":"#024caa",
          "orangeMix":"#ec8305",
          "night":"#006a67",
          
          // Mor tonlarında bir renk ekledik
        },
      },
      "light",
      "dark",
    ],
  },
  
}
