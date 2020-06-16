import Head from 'next/head';
import styled from 'styled-components';
import { darken } from 'polished';

import { Container } from 'components';

function Projects() {
  return (
    <Container>
      <Head>
        <title>Projects - Nidratech</title>
      </Head>

      <ProjectContainer>
        <TitleContainer>
          <ProjectLink href="https://www.tomati.io" rel="noreferrer" target="_blank">
            <img src="images/tomati-logo.png" title="Tomati" />
          </ProjectLink>

          <div>
            <TomatiTitle>
              <a href="https://www.tomati.io" rel="noreferrer" target="_blank">
                <InlineProjectImg src="images/tomati-logo.png" title="Tomati" /> Tomati
              </a>
            </TomatiTitle>

            <p>
              A restaurant health inspection reports aggregator. We gather inspection reports from
              hundreds of thousands of Canadian and American food establishments and aggregate them
              with Groupon deals, data from Google, Yelp and Zomato to provide the user with a rich
              collection of information about the favorite local restaurants.
            </p>
          </div>
        </TitleContainer>

        <PromoImages>
          <ProjectImg src="images/tomati-1.jpg" alt="Tomati screenshot #1" />
          <ProjectImg src="images/tomati-4.jpg" alt="Tomati screenshot #2" />
          <ProjectImg src="images/tomati-2.jpg" alt="Tomati screenshot #3" />
        </PromoImages>

        <IconContainer>
          <a
            href="https://play.google.com/store/apps/details?id=com.nidratech.tomati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayStoreIcon src="images/android-play-badge.png" title="Android app" />
          </a>

          <a
            href="https://itunes.apple.com/us/app/tomati-restaurant-inspector/id1440846554"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreIcon src="images/app-store-badge.svg" alt="iOS app" />
          </a>
        </IconContainer>
      </ProjectContainer>

      <ProjectContainer>
        <TitleContainer>
          <ProjectLink href="https://www.huegasm.com" rel="noreferrer" target="_blank">
            <img src="images/huegasm-logo.png" title="Huegasm" />
          </ProjectLink>

          <div>
            <HuegasmTitle>
              <a href="https://www.huegasm.com" rel="noreferrer" target="_blank">
                <InlineProjectImg src="images/huegasm-logo.png" title="Huegasm" /> Huegasm
              </a>
            </HuegasmTitle>

            <p>
              A Chrome extension, web, Android and iOS app for controlling and syncing Philips Hue
              lights with music.
            </p>
          </div>
        </TitleContainer>

        <PromoImages>
          <ProjectImg src="images/huegasm-1.jpg" alt="Huegasm screenshot #1" />
          <ProjectImg src="images/huegasm-2.jpg" alt="Huegasm screenshot #2" />
          <ProjectImg src="images/huegasm-3.jpg" alt="Huegasm screenshot #3" />
        </PromoImages>

        <IconContainer>
          <a
            href="https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChromeStoreIcon src="images/chrome-store-badge.png" title="Chrome extension" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.hoboman313.huegasm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayStoreIcon src="images/android-play-badge.png" title="Android app" />
          </a>

          <a
            href="https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreIcon src="images/app-store-badge.svg" alt="iOS app" />
          </a>
        </IconContainer>
      </ProjectContainer>
    </Container>
  );
}

const InlineProjectImg = styled.img`
  width: 2rem;
  position: relative;
  top: 0.25rem;

  @media (min-width: 44rem) {
    display: none;
  }
`;
const ProjectLink = styled.a`
  @media (max-width: 44rem) {
    display: none;
  }
`;
const TitleContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.medium};
  grid-template-columns: 5rem 1fr;
  align-items: center;

  @media (max-width: 44rem) {
    grid-template-columns: 1fr;
  }
`;
const TomatiTitle = styled.h2`
  font-size: 1.5em;
  margin: 0.5rem 0;

  a {
    color: #f93e0b;

    :hover,
    :focus {
      color: ${darken(0.05, '#f93e0b')};
    }
  }
`;
const HuegasmTitle = styled.h2`
  font-size: 1.5em;
  margin: 0.5rem 0;

  a {
    color: #910249;

    :hover,
    :focus {
      color: ${darken(0.05, '#910249')};
    }
  }
`;
const PromoImages = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: grid;
  grid-template-columns: repeat(3, 12.5rem);
  grid-gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
  justify-content: center;

  @media (max-width: 44rem) {
    grid-template-columns: 1fr;
  }
`;
const ChromeStoreIcon = styled.img`
  width: 10.5rem;
`;
const PlayStoreIcon = styled.img`
  width: 9.25rem;
`;
const AppStoreIcon = styled.img`
  width: 7.5rem;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
const ProjectContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
const ProjectImg = styled.img`
  width: 12.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding: 0 0.25rem;

  @media (max-width: 44rem) {
    margin-bottom: 0;
  }
`;

export default Projects;
