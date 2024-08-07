import styled from 'styled-components';
import { darken } from 'polished';

import PageTitle from 'components/PageTitle';
import Layout from 'components/Layout';

const Projects = () => (
  <Layout title="Projects | Nidratech" description="Past projects of Nidratech.">
    <PageTitle title="What we've been up to lately" />

    <PageSubTitle>
      Outside of working with our clients, we spend some time working on side projects.
    </PageSubTitle>

    <ProjectContainer>
      <TitleContainer>
        <ProjectLink href="https://score.restaurant/" rel="noreferrer" target="_blank">
          <img src="images/tomati-logo.png" alt="Tomati" title="Tomati" />
        </ProjectLink>

        <div>
          <TomatiTitle>
            <a href="https://score.restaurant/" rel="noreferrer" target="_blank">
              <InlineProjectImg src="images/tomati-logo.png" alt="Tomati" title="Tomati" /> Tomati
            </a>
          </TomatiTitle>

          <p>
            A restaurant health inspection reports aggregator. We gather inspection reports from
            hundreds of thousands of Canadian and American food establishments and aggregate them
            with Groupon deals, data from Google, Yelp and Zomato to provide the user with a rich
            collection of information about the favorite local restaurants.
          </p>
          <p>
            Tomati was very recently rejuvenated as a web experience at{' '}
            <a href="https://score.restaurant" rel="noreferrer" target="_blank">
              https://score.restaurant
            </a>
          </p>
        </div>
      </TitleContainer>

      <PromoImages>
        <ProjectImg src="images/tomati-1.jpg" alt="Tomati screenshot #1" />
        <ProjectImg src="images/tomati-4.jpg" alt="Tomati screenshot #2" />
        <ProjectImg src="images/tomati-2.jpg" alt="Tomati screenshot #3" />
      </PromoImages>
    </ProjectContainer>

    <ProjectContainer>
      <TitleContainer>
        <ProjectLink href="https://www.huegasm.com" rel="noreferrer" target="_blank">
          <img src="images/huegasm-logo.png" alt="Huegasm" title="Huegasm" />
        </ProjectLink>

        <div>
          <HuegasmTitle>
            <a href="https://www.huegasm.com" rel="noreferrer" target="_blank">
              <InlineProjectImg src="images/huegasm-logo.png" alt="Huegasm" title="Huegasm" />{' '}
              Huegasm
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
          <ChromeStoreIcon
            src="images/chrome-store-badge.png"
            alt="Chrome store"
            title="Chrome extension"
          />
        </a>
      </IconContainer>
    </ProjectContainer>
  </Layout>
);

const PageSubTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.mediumLarge};
  font-size: 1.25em;
`;
const InlineProjectImg = styled.img`
  width: 2rem;
  position: relative;
  top: 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const ProjectLink = styled.a`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const TitleContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.medium};
  grid-template-columns: 5rem 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  place-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
const ChromeStoreIcon = styled.img`
  width: 10.5rem;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  flex-flow: wrap;
`;
const ProjectContainer = styled.div`
  border: 1px solid rgba(0 0 0 / 12.5%);
  padding: 0.75rem 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
const ProjectImg = styled.img`
  width: 12.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding: 0 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;

export default Projects;
