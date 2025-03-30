/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002E63", // Dark Blue
        secondary: "#FFFFFF", // White
        accent: "#000000", // Black (used minimally)
      },
      fontFamily: {
        major: ["Archivo", "sans-serif"], // Major Font
        minor: ["Poppins", "sans-serif"], // Minor Font (used sparingly)
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2XL screens
      },
    },
  },
  plugins: [],
}

