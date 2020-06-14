import styled from 'styled-components';

export default styled.div`
  max-width: 60rem;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 36rem) {
    max-width: auto;
  }
`;
