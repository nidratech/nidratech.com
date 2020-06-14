import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import NidratechLogo from 'components/NidratechLogo';

function Header() {
  const { pathname } = useRouter();

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
            <NavItem as="a" title={'Home'} isActive={pathname === '/'}>
              Home
            </NavItem>
          </Link>

          <Link href={'/projects'} passHref>
            <NavItem as="a" title={'Projects'} isActive={pathname === '/projects'}>
              Projects
            </NavItem>
          </Link>

          <Link href={'/clients'} passHref>
            <NavItem as="a" title={'Clients'} isActive={pathname === '/clients'}>
              Clients
            </NavItem>
          </Link>

          <Link href={'/contact'} passHref>
            <NavItem as="a" title={'Contact us'} isActive={pathname === '/contact'}>
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
  height: 100%;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand : theme.colors.grey)};

  :hover {
    color: ${({ isActive, theme }) =>
      darken(0.05, isActive ? theme.colors.brand : theme.colors.grey)};
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
`;

export default Header;
