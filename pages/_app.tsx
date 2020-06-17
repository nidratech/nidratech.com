import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import ReactGA from 'react-ga';
// @ts-ignore
import { PageTransition } from 'next-page-transitions';

import { GlobalStyles, theme } from 'styles';
import { Navbar } from 'components';

const year = new Date().getFullYear();

Router.events.on('routeChangeComplete', () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

const App = ({ Component, pageProps, router }: AppProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID as string);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Nidratech - Web Consulting in Touch with Tomorrow</title>
      </Head>

      <GlobalStyles />

      <MainLayoutContainer>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />

        <StyledMain>
          <PageTransition timeout={200} classNames="page-transition" skipInitialTransition>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </StyledMain>

        <StyledFooter>Forged from 🔥 ©{year} Nidratech Ltd.</StyledFooter>
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
  padding-top: ${({ theme }) => theme.spacing.navBarHeight};
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.grey};
`;

export default App;