module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  variants: {
    extend: {
      // ...
      translate: ["group-hover", "focus"],
      rotate: ["group-hover", "responsive", "hover", "focus"],
      borderColor: ["group-hover"],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      main: "#57B7DD",
      deep: "#1B5C79",
      dark: "#1E2434",
      maingray: "#333333",
      black: "#000000",
      blue: "#A9DEF9",
      indigo: "#CF90F4",
      purple: "#E4C1F9",
      pink: "#FF99A2",
      red: "#f74a4a",
      orange: "#F9E2A9",
      yellow: "#fcf6bd",
      green: "#d0f4de",
      teal: "#C2F9C3",
      cyan: "#A9F9D8",
      navy: "#074362",
      gray: {
        100: "#f8f9fa",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#6c757d",
        700: "#495057",
        800: "#343a40",
        900: "#212529",
      },
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Varela Round", "sans-serif"],
      serif: ["Varela Round", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      margin: {
        68: "17rem",
        18: "4.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "2.75rem",
      },
      backgroundImage: {
        "hero-pattern": "url(assets/images/hero-background.jpg)",
        "founder-image": "url(assets/images/founder.png)",
      },
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      tiny: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "24px",
      "4xl": "26px",
      "5xl": "28px",
      "6xl": "30px",
      "7xl": "32px",
      "8xl": "34px",
      "9xl": "36px",
      "10xl": "38px",
      "11xl": "40px",
    },
  },

  plugins: [],
};
