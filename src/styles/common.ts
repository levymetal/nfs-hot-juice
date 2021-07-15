import {css} from '@emotion/react';

export {reset} from './reset';

export const base = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    background-color: #111;
  }

  body {
    font-family: 'Hermes', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body,
  a {
    color: white;
  }
`;
