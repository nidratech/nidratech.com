import Head from 'next/head';
import styled from 'styled-components';

import { Container, HighlightLine } from 'components';

function Clients() {
  return (
    <Container>
      <Head>
        <title>Clients</title>
      </Head>

      <TitleContainer>
        <Title>Some of our clients include</Title>
        <HighlightLine />
      </TitleContainer>
    </Container>
  );
}

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
`;
const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default Clients;
