/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    colors: {
      darkBlue: "#003366",
      darkPurple: "#642764",
      dtBgMainColor: "#F8F8FF",
      dBlack: "#000",
      dWhite: "#FFFFFF",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
