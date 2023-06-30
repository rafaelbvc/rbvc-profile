/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    colors: {
      dtBgMainColor: "#FCFCFF",
      dBlack: "#000",
      dWhite: "#FFFFFF",
      dGrayTitle: "#b6b6b6",
      dGrayBGScreens: "RGB(220,220,220, 0.05)",
      dBgButtonsHover:"#D9E2E5",
      dGolden: "#CAAA6C"
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
