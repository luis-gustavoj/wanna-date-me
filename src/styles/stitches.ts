import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      red: '#C81D25',
      pink: '#F7A9A8',
      black: '#33312E',
      white: '#F1E3E4',
    },
  },
  utils: {
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap')",
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    height: '100%',
    fontFamily: 'Poppins, sans-serif',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  '#__next': {
    height: '100%',
    isolation: 'isolate',
  },
});
