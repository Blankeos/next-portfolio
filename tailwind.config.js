module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      "bebas-neue": ["Bebas Neue"],
    },
    extend: {
      fontSize: {
        xxs: [
          "0.65rem",
          {
            lineHeight: "1rem",
          },
        ],
      },
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
      rotate: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
