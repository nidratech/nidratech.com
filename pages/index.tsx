import styled from 'styled-components';
import Link from 'next/link';

import Button from 'components/Button';
import HighlightLine from 'components/HighlightLine';
import Layout from 'components/Layout';

const Home = () => (
  <Layout title="Nidratech" description="The company site of Nidratech." isHome>
    <PageTitleContainer>
      <PageTitle>Web Consulting in Touch with Tomorrow</PageTitle>

      <HighlightLine />
    </PageTitleContainer>

    <PageSubTitle>
      We bring ideas to life and create products that people love. <br />
      Let us help you make something remarkable.
    </PageSubTitle>

    <Link href="/contact">
      <Button type="button">Contact</Button>
    </Link>
  </Layout>
);

const PageTitleContainer = styled.div`
  display: inline-block;
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
