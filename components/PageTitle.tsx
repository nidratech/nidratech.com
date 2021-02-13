import styled from 'styled-components';

import { HighlightLine } from 'components';

interface Props {
  title: string;
}

function PageTitle({ title }: Props): JSX.Element {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <HighlightLine />
    </TitleContainer>
  );
}

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
`;
const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default PageTitle;
