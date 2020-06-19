import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import { COLOR_BRAND } from 'styles/theme';

export const GlobalStyle = createGlobalStyle`  
  #__next {
    font-family: 'Roboto', sans-serif;
  }
  *, html * {
    transition: color 0.1s ease, background-color 0.1s ease, border-color 0.1s ease;
  }
  html, body {
    font-family: 'Roboto', sans-serif;
  }
  a {
      color: ${COLOR_BRAND};
      text-decoration: none;
  }
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const GlobalStyles = () => (
  <>
    <Reset />
    <GlobalStyle />
  </>
);

export default GlobalStyles;
