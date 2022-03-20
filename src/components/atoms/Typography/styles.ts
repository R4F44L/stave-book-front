import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';
import { textStyles } from 'theme/config/typography';

import { TypographyProps } from './types';

export const Typography = styled.p<TypographyProps>`
  ${typography};
  ${space};
  ${color};
  ${variant({
    scale: 'textStyles',
    variants: textStyles
  })};
`;
