import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { mediaQueries } from 'theme/config/breakpoints';
import mixins from 'theme/mixins';
import { buttonMode, buttonSize } from './consts';
import { StyledButtonProps } from './types';

export const Button = styled.button<StyledButtonProps>`
  font: inherit;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mixins.transition()};
  ${variant({
    scale: 'mode',
    prop: 'mode',
    variants: buttonMode
  })}
  ${variant({
    scale: 'size',
    prop: 'size',
    variants: buttonSize
  })};
  ${({ disabled }) =>
    disabled &&
    css`
      ${mixins.disabledStyle(disabled)}
    `}
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
  ${mediaQueries.DESKTOP} {
    &:hover {
      opacity: 0.5;
    }
  }
`;
