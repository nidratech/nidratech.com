import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Fragment } from 'react';
import type { AppType } from 'next/dist/shared/lib/utils';

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

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <Fragment key={0}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
