module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      body: ["Open Sans", "Montserrat", "Roboto"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
