import Head from 'next/head';
import styled from 'styled-components';

import { Container, HighlightLine } from 'components';

function Success() {
  return (
    <Container>
      <Head>
        <title>Success</title>
      </Head>

      <ThanksTitleContainer>
        <div>
          <ThanksTitle>Your email has been successfully sent</ThanksTitle>
          <HighlightLine />
        </div>
      </ThanksTitleContainer>
    </Container>
  );
}

const ThanksTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
`;
const ThanksTitleContainer = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

export default Success;
