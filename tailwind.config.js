module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "bebas-neue": ["Bebas Neue"],
    },
    extend: {
      maxWidth: {
        "10xl": "100rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
