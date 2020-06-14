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
`;

const GlobalStyles = () => (
  <>
    <Reset />
    <GlobalStyle />

    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');
    `}</style>
  </>
);

export default GlobalStyles;
