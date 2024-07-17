import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import NidratechLogo from 'components/NidratechLogo';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const Navbar = ({ isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { pathname } = useRouter();

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link href="/">
            <NavItem aria-label="Nidratech Ltd.">
              <StyledNidratechLogo />
            </NavItem>
          </Link>

          <NavLinks>
            <li>
              <Link href="/">
                <NavItem title="Home" $isActive={pathname === '/'}>
                  Home
                </NavItem>
              </Link>
            </li>

            <li>
              <Link href="/clients">
                <NavItem title="Clients" $isActive={pathname === '/clients'}>
                  Clients
                </NavItem>
              </Link>
            </li>

            <li>
              <Link href="/projects">
                <NavItem title="Projects" $isActive={pathname === '/projects'}>
                  Projects
                </NavItem>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <NavItem title="Contact us" $isActive={pathname === '/contact'}>
                  Contact
                </NavItem>
              </Link>
            </li>
          </NavLinks>

          <BurgerWrapper>
            <BurgerMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>

      <CollapseMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </>
  );
};

const StyledNidratechLogo = styled(NidratechLogo)`
  width: 9.5rem;
  height: 4rem;
`;
const NavItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.brand : theme.colors.grey)};

  :hover {
    color: ${({ $isActive, theme }) =>
      darken(0.05, $isActive ? theme.colors.brand : theme.colors.grey)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  height: ${({ theme }) => theme.spacing.navBarHeight};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `0 ${theme.spacing.small}`};
  }
`;
const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export default Navbar;
