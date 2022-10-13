import { styled } from '@styles';

export const PageContainer = styled('div', {
  height: '100%',
  background: '$pink',
  display: 'flex',
  flexDirection: 'column',
});

export const PageInnerContainer = styled('div', {
  px: '2rem',
  py: '2rem',
  textAlign: 'center',
  maxWidth: '1440px',
  mx: 'auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '4rem',
    color: '$black',
  },
});

export const LovedEmojiContainer = styled('div', {
  display: 'grid',
  placeItems: 'center',
  flex: '1',
});

export const Footer = styled('div', {});
