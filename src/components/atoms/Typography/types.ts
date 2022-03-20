import { ColorProps, SpaceProps, TypographyProps as StyledTypographyProps } from 'styled-system';
import { textStyles } from 'theme/config/typography';

export type TType = keyof typeof textStyles;

export interface TypographyProps extends StyledTypographyProps, SpaceProps, ColorProps {
  variant?: TType;
  as?: React.ElementType;
  children?: React.ReactNode;
}

export type ElementMapType = {
  [key in TType]: React.ElementType;
};
