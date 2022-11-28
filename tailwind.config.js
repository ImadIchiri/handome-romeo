/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1A313B",
        secondaryColor: "#B68B60",
        secondaryColorLight: "#B08359",
        hotBlue: "#16263D",
        lightBlue: "#455666",
        hotBrown: "#98582C",
        lightBrown: "#CC782F",
        orange: "#F07317",
      },
      fontFamily: {
        italiana: ["Italiana", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        tablet: "768px",
        laptop: "992px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
