/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
              "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        geordiecoder: {
        
        "primary": "#42b883",
                
        "secondary": "#35495e",
                
        "accent": "#82B1FF",
                
        "neutral": "#191D24",
                
        "base-100": "#2A303C",
                
        "info": "#2196F3",
                
        "success": "#4CAF50",
                
        "warning": "#FFC107",
                
        "error": "#FF5252",
                },
              },
            ],
          },
  plugins: [require("daisyui")],
}
