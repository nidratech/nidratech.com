import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';

import NidratechLogo from 'components/NidratechLogo';

const year = new Date().getFullYear();

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <NavContainer>
          <Link href={'/'} passHref>
            <NavItem as="a" aria-label={'Nidratech Ltd.'}>
              <StyledNidratechLogo />
            </NavItem>
          </Link>
        </NavContainer>

        <NavContainer>
          <Link href={'/'} passHref>
            <NavItem as="a" title={'Home'}>
              Home
            </NavItem>
          </Link>

          <Link href={'/projects'} passHref>
            <NavItem as="a" title={'Projects'}>
              Projects
            </NavItem>
          </Link>

          <Link href={'/clients'} passHref>
            <NavItem as="a" title={'Clients'}>
              Clients
            </NavItem>
          </Link>

          <Link href={'/contact'} passHref>
            <NavItem as="a" title={'Contact us'}>
              Contact us
            </NavItem>
          </Link>
        </NavContainer>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledNidratechLogo = styled(NidratechLogo)`
  width: 9.5rem;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavItem = styled.a`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.brand};
  :hover {
    color: ${({ theme }) => darken(0.1, theme.colors.brand)};
  }
`;
const StyledNav = styled.nav`
  padding: 0 ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.spacing.navBarHeight};
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.greyLight};
`;

export default Header;
