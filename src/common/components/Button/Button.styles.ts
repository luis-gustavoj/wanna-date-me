import { styled } from '@styles';

export const Button = styled('button', {
  background: '$red',
  color: '$white',
  border: 'none',
  borderRadius: '0.5rem',
  minWidth: '10rem',
  maxHeight: 'fit-content',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  lineHeight: '1em',
  cursor: 'pointer',
  py: '0.5rem',
  px: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',

  '& svg': {
    display: 'inline-block',
    marginLeft: '0.5rem',
    width: '2rem',
    height: '2rem',
  },
});
