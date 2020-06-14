import Head from 'next/head';

import { Container, HighlightLine } from 'components';

function Success() {
  return (
    <Container>
      <Head>
        <title>Success</title>
      </Head>

      <div>Your email has been successfully sent.</div>
      <HighlightLine />
    </Container>
  );
}

export default Success;
