import React, { ForwardRefRenderFunction } from 'react';
import { elementMap } from './consts';
import * as Styled from './styles';
import { TypographyProps } from './types';

const Typography: ForwardRefRenderFunction<HTMLElement, TypographyProps> = (
  { variant = 'paragraph', as: asProp, children, ...rest },
  ref
) => {
  const as = asProp || elementMap[variant] || 'p';

  return <Styled.Typography {...{ as, variant, ref, ...rest }}>{children}</Styled.Typography>;
};

export default React.forwardRef(Typography);
