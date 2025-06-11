module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        foreground: "#A0A0A0",
        primary: "#B8860B",
        buttonText: "#1A1A1A",
        hover: "#B8860B",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
