import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const CollapseMenu = ({ isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { open } = useSpring({ open: isNavbarOpen ? 0 : 1 });
  const { pathname } = useRouter();

  if (isNavbarOpen) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link href={'/'} passHref>
              <NavItem
                as="a"
                title={'Home'}
                onClick={() => setIsNavbarOpen(false)}
                isActive={pathname === '/'}
              >
                Home
              </NavItem>
            </Link>
          </li>

          <li>
            <Link href={'/clients'} passHref>
              <NavItem
                as="a"
                title={'Clients'}
                onClick={() => setIsNavbarOpen(false)}
                isActive={pathname === '/clients'}
              >
                Clients
              </NavItem>
            </Link>
          </li>

          <li>
            <Link href={'/projects'} passHref>
              <NavItem
                as="a"
                title={'Projects'}
                onClick={() => setIsNavbarOpen(false)}
                isActive={pathname === '/projects'}
              >
                Projects
              </NavItem>
            </Link>
          </li>

          <li>
            <Link href={'/contact'} passHref>
              <NavItem
                as="a"
                title={'Contact'}
                onClick={() => setIsNavbarOpen(false)}
                isActive={pathname === '/contact'}
              >
                Contact
              </NavItem>
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }

  return null;
};

const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand : theme.colors.grey)};

  :hover {
    color: ${({ isActive, theme }) =>
      darken(0.05, isActive ? theme.colors.brand : theme.colors.grey)};
  }
`;
const CollapseWrapper = styled(animated.div)`
  background: ${({ theme }) => darken(0.05, theme.colors.white)};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 999;
`;
const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export default CollapseMenu;
