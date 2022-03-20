import React from 'react';
import * as Styled from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  mode = 'primary',
  size = 'big',
  type = 'button',
  ...rest
}) => <Styled.Button {...{ mode, size, type, ...rest }}>{children}</Styled.Button>;

export default Button;
