import { extendTheme } from "@chakra-ui/react";

export const ThemeST = extendTheme({
  colors: {
    AZUL: {
      "10": "#87CEFA",
      "20": "#6495ED",
      "30": "#4169E1",
      "40": "#16428E",
      "50": "#00008B",
      "60": "#191970",
    },
    AMAR: {
      "10": "#F0E68C",
      "20": "#FFFF00",
      "30": "#FFD700",
      "40": "#FBAB18",
    },
    ROXO: {
      "10": "#9932CC",
      "20": "#8A2BE2",
      "30": "#4B0082",
    },
    CINZ: {
      "10": "#D9E6EC",
      "20": "#DCDCDC",
      "30": "#C0C0C0",
      "40": "#A9A9A9",
      "50": "#808080",
      "60": "#696969",
    },
    ROSA: {
      "10": "#FFC0CB",
      "20": "#DB7093",
      "30": "#FF69B4",
      "40": "#FF1493",
      "50": "#C71585",
    },
    BRPR: {
      "10": "#FFFFFF",
      "20": "#000000",
    },
    VERD: {
      "10": "#ADFF2F",
      "20": "#7CFC00",
      "30": "#00FF00",
      "40": "#32CD32",
      "50": "#006400",
      "60": "#2E8B57",
      "70": "#008F89",
      "80": "#317F7E",
      "90": "#325F74",
    },
    VERM: {
      "10": "#FA8072",
      "20": "#B22222",
      "30": "#FF0000",
      "40": "#800000",
    },
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    text1: {
      fontSize: ["14px", "16px"],
      fontWeight: "semibold",
      // lineHeight: "110%",
      // letterSpacing: "-1%",
    },
    text2: {
      fontSize: ["10px", "14px"],
    },
    text3: {
      fontSize: "12px",
    },
  },
});
