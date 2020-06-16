import Head from 'next/head';
import styled from 'styled-components';

import { Container, HighlightLine } from 'components';

function Clients() {
  return (
    <Container>
      <Head>
        <title>Clients - Nidratech</title>
      </Head>

      <TitleContainer>
        <Title>Some of our clients include</Title>
        <HighlightLine />
      </TitleContainer>

      <ul>
        <ListGroupItem>
          <ClientLogoContainer>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <GClientLogo src="images/glogo.png" title="European Gemological Laboratory" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              Google
            </a>
            <small class="text-muted d-block">Mountain View, USA</small>
          </ClientInfo>
        </ListGroupItem>

        <ListGroupItem>
          <ClientLogoContainer>
            <a href="http://www.egllaboratories.org/" target="_blank" rel="noopener noreferrer">
              <ClientLogo src="images/egl-logo.png" title="European Gemological Laboratory" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="http://www.egllaboratories.org/" target="_blank" rel="noopener noreferrer">
              European Gemological Laboratory
            </a>
            <small class="text-muted d-block">New York, USA</small>
          </ClientInfo>
        </ListGroupItem>

        <ListGroupItem>
          <ClientLogoContainer>
            <a href="https://www.cglgrs.com/" target="_blank" rel="noopener noreferrer">
              <ClientLogo src="images/cgl-logo.png" title="Canadian Gemological Laboratory" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="https://www.cglgrs.com/" target="_blank" rel="noopener noreferrer">
              Canadian Gemological Laboratory
            </a>
            <small class="text-muted d-block">Vancouver, BC, Canada</small>
          </ClientInfo>
        </ListGroupItem>

        <ListGroupItem>
          <ClientLogoContainer>
            <a href="http://ggacanada.ca/" target="_blank" rel="noopener noreferrer">
              <ClientLogo src="images/gga-logo.jpg" title="Gems Grading &#38; Appraising" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="http://ggacanada.ca/" target="_blank" rel="noopener noreferrer">
              Gems Grading &#38; Appraising
            </a>
            <small class="text-muted d-block">Vancouver, BC, Canada</small>
          </ClientInfo>
        </ListGroupItem>

        <ListGroupItem>
          <ClientLogoContainer>
            <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer">
              <ClientLogo src="images/ia-financial-logo.svg" title="iA Financial Group" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer">
              iA Financial Group
            </a>
            <small class="text-muted d-block">Vancouver, BC, Canada</small>
          </ClientInfo>
        </ListGroupItem>

        <ListGroupItem>
          <ClientLogoContainer>
            <a href="https://www.worksafebc.com/" target="_blank" rel="noopener noreferrer">
              <ClientLogo src="images/wsbc-logo.jpg" title="WorkSafe BC" />
            </a>
          </ClientLogoContainer>
          <ClientInfo>
            <a href="https://www.worksafebc.com/" target="_blank" rel="noopener noreferrer">
              WorkSafe BC
            </a>
            <small class="text-muted d-block">Richmond, BC, Canada</small>
          </ClientInfo>
        </ListGroupItem>
      </ul>
    </Container>
  );
}

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ClientLogoContainer = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ClientLogo = styled.img`
  width: 8rem;
  margin-right: 5rem;
`;
const GClientLogo = styled(ClientLogo)`
  width: 6rem;
  margin-right: 6rem;
  margin-left: 1rem;
`;
const ListGroupItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
`;
const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default Clients;
