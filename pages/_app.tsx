import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

import { GlobalStyles, theme } from 'styles';
import { trackPageView } from 'lib/analytics';
import { Header } from 'components';

Router.events.on('routeChangeComplete', (url) => {
  window.scrollTo(0, 0);
  trackPageView(url);
});

const year = new Date().getFullYear();

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Nidratech Ltd.</title>
      </Head>

      <GlobalStyles />

      <MainLayoutContainer>
        <Header />

        <StyledMain>
          <Component {...pageProps} key={router.route} />
        </StyledMain>

        <StyledFooter>Forged from 🔥 © {year} Nidratech Ltd.</StyledFooter>
      </MainLayoutContainer>
    </ThemeProvider>
  );
};

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;
const StyledMain = styled.main`
  margin-top: ${({ theme }) => theme.spacing.navBarHeight};
  padding: ${({ theme }) => theme.spacing.medium};
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.grey};
`;

export default App;
