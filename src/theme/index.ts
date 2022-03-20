import { fonts, fontSizes, lineHeights, fontWeights, textStyles } from './config/typography';
import breakpoints from './config/breakpoints';
import sizes from './config/sizes';
import space from './config/space';
import baseColors from './config/colors';

const theme = {
  breakpoints,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  textStyles,
  colors: {
    white: baseColors.white,
    black: baseColors.black,
    primary: baseColors.deepRed,
    primaryBackground: baseColors.lightGrey,
    secondaryBackground: baseColors.deepBlue,
    tertiaryBackground: baseColors.white,
    headingColor: baseColors.deepBlue,
    warning: baseColors.deepRed,
    paragraph: baseColors.blackBlue,
    border: baseColors.primaryGrey
  },
  sizes,
  space
};

export default theme;

export type Theme = typeof theme;
