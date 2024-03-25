/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#144272",
        gray: "#0a2647",
        lightskyblue: "#87c4ff",
        steelblue: "#5491cc",
        black: "#000",
        white: "#fff",
        gainsboro: "#d9d9d9",
        aliceblue: "#e0f4ff",
      },

      spacing: {},
      fontFamily: {
        "red-rose": "'Red Rose'",
        inter: "Inter",
        
      },

      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },

    },
    fontSize: {
      "9xl": "64px",
      "3xl": "32px",
      inherit: "inherit",
      xl: "1.25rem",
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    
  },
  
  
}