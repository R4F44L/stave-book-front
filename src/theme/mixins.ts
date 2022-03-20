import { css } from 'styled-components';

export default {
  transition: ({ properties = '', type = 'ease-in-out', time = '0.25s' } = {}) => css`
    transition: ${time} ${type};
    ${properties &&
    css`
      transition-property: ${properties};
      will-change: ${properties};
    `}
  `,
  disabledStyle: (disabled = false) =>
    disabled &&
    css`
      cursor: default;
      pointer-events: none;
    `,
  truncateText: () => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  listReset: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `
};
