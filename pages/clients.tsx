import Head from 'next/head';
import styled from 'styled-components';

import { Container, PageTitle } from 'components';

function Clients() {
  return (
    <Container>
      <Head>
        <title>Clients - Nidratech</title>
      </Head>

      <PageTitle title="Some of our clients include" />

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
            <ClientAddress>Mountain View, USA</ClientAddress>
            <p>We&apos;ve been working as contractors for Google Nest since 2016.</p>
            <ProjectList>
              Projects: Google Nest Login, Google Store, Nest Enterprise Portal, Nest HVAC Portal.
            </ProjectList>
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
            <ClientAddress>New York, USA</ClientAddress>
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
            <ClientAddress>Vancouver, BC, Canada</ClientAddress>
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
            <ClientAddress>Vancouver, BC, Canada</ClientAddress>
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
            <ClientAddress>Vancouver, BC, Canada</ClientAddress>
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
            <ClientAddress>Richmond, BC, Canada</ClientAddress>
          </ClientInfo>
        </ListGroupItem>
      </ul>
    </Container>
  );
}

const ClientAddress = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.9em;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 2rem;
  }
`;
const GClientLogo = styled(ClientLogo)`
  width: 6rem;
  margin-right: 6rem;
  margin-left: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 4rem;
    margin-right: 2rem;
    margin-left: 0.5rem;
  }
`;
const ListGroupItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
const ProjectList = styled.p`
  margin-top: 0.25rem;
`;

export default Clients;
