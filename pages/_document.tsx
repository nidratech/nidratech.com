import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppType } from 'next/dist/next-server/lib/utils';

class Document extends NextDocument {
  // this is the key to making styled components reload properly in an SSR environment
  // code copied from https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="Nidratech - Web Consulting in Touch with Tomorrow" />
          <meta
            name="keywords"
            content="nidratech,huegasm,tomati,web,mobile,chrome,extension,tech,consulting"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nidratech - Web Consulting in Touch with Tomorrow" />
          <meta property="og:description" content="Web Consulting in Touch with Tomorrow" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:site_name"
            content="Nidratech - Web Consulting in Touch with Tomorrow"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
