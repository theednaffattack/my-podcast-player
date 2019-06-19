const blue = "#07c";

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray: "#f6f6ff",
    text: "rgb(68, 68, 68)"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "montserrat, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
    special: "0 0 16px 4px rgba(0, 0, 0, .125)"
  },
  radii: {
    card: "17px"
  },
  borders: {
    lime: "2px limegreen dashed",
    crimson: "2px crimson dashed",
    steelblue: "2px crimson dashed",
    purp: "2px rebeccapurple dashed",
    pink: "2px pink dashed"
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: blue
    },
    outline: {
      color: "#fff",
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px"
    },
    gradient: {
      backgroundImage:
        "linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",

      boxShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.1);"
    }
  }
};
