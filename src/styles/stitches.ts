import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      red: "#C81D25",
      pink: "#F7A9A8",
      black: "#33312E",
      white: "#F1E3E4",
    },
  },
  utils: {
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    py: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
