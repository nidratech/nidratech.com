import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { PageTransition } from 'next-page-transitions';
import { NextPage } from 'next';

import { GlobalStyles, theme } from 'styles';
import { Navbar } from 'components';

import '@fontsource/roboto';

const year = new Date().getFullYear();

Router.events.on('routeChangeComplete', () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID as string);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.grey};
`;

export default App;
