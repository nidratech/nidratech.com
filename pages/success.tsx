import Head from 'next/head';
import styled from 'styled-components';

import { Container, PageTitle } from 'components';

function Success() {
  return (
    <Container>
      <Head>
        <title>Success</title>
      </Head>

      <ThanksTitleContainer>
        <PageTitle title="Your email has been successfully sent" />
      </ThanksTitleContainer>
    </Container>
  );
}

const ThanksTitleContainer = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

export default Success;
