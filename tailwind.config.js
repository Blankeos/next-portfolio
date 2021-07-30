module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "bebas-neue": ["Bebas Neue"],
    },
    extend: {
      maxWidth: {
        "8xl": "100rem",
        "9xl": "110rem",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "group-hover"],
      height: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
