
module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light: {
          100: "#EBEBEB",
          200: "#CECECE",
          300: "#B0B0B0"
        },
        dark: {
          100: "#0F2A45",
          200: "#092038",
          300: "#06182C"
        }
      },
      screens: {
        "xl": "1440px",
        "2xl": "1920px"
      },
      fontSize: {
        "10xl": ["11rem", "1"]
      },
      height: {
        section: "60rem"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
