import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

import { Button, HighlightLine } from 'components';

function Home() {
  return (
    <HomeContainer>
      <PageTitleContainer>
        <PageTitle>Web Consulting in Touch with Tomorrow</PageTitle>

        <HighlightLine />
      </PageTitleContainer>

      <PageSubTitle>
        We bring ideas to life and create products that people love. <br />
        Let us help you make something remarkable.
      </PageSubTitle>

      <Link href="/contact" passHref>
        <Button type="button" as="a">
          Contact
        </Button>
      </Link>
    </HomeContainer>
  );
}
const background = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 199px;
  }
`;
const PageTitleContainer = styled.div`
  display: inline-block;
`;
const HomeContainer = styled.div`
  background-color: #292929;
  background-image: url(images/hero-pattern.svg);
  background-size: 100px 199px;
  animation: ${background} 3.5s linear infinite;
  color: ${({ theme }) => theme.colors.white};
  padding: 10vh 3vw;
`;
const PageTitle = styled.h1`
  font-size: 2.5em;
  margin-top: 2vh;
`;
const PageSubTitle = styled.h1`
  font-size: 1.25em;
  margin-top: 5vh;
  margin-bottom: 6vh;
  line-height: 1.5;
`;

export default Home;
