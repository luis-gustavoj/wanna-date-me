import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import * as S from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...rest },
  ref,
) => (
  <S.Button ref={ref} type="button" {...rest}>
    {children}
  </S.Button>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonBase);
