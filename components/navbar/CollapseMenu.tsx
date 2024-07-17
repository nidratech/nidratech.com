import { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const CollapseMenu = ({ isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { pathname } = useRouter();
  const ref = useRef(null);
  const closeNavbar = useCallback(() => setIsNavbarOpen(false), [setIsNavbarOpen]);

  const transition = useTransition(isNavbarOpen, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const menuToggle = document.querySelector('#menu-toggle');
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isNavbarOpen &&
        !ref?.current.contains(event.target) &&
        !menuToggle?.contains(event.target as Element)
      ) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isNavbarOpen]);

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            // @ts-ignore TODO: weird style typing?
            <CollapseWrapper ref={ref} style={style}>
              <NavLinks>
                <li>
                  <Link href="/">
                    <NavItem
                      title="Home"
                      onClick={closeNavbar}
                      onKeyDown={closeNavbar}
                      $isActive={pathname === '/'}
                      role="button"
                      tabIndex={0}
                    >
                      Home
                    </NavItem>
                  </Link>
                </li>

                <li>
                  <Link href="/clients">
                    <NavItem
                      title="Clients"
                      onClick={closeNavbar}
                      onKeyDown={closeNavbar}
                      $isActive={pathname === '/clients'}
                      role="button"
                      tabIndex={0}
                    >
                      Clients
                    </NavItem>
                  </Link>
                </li>

                <li>
                  <Link href="/projects">
                    <NavItem
                      title="Projects"
                      onClick={closeNavbar}
                      onKeyDown={closeNavbar}
                      $isActive={pathname === '/projects'}
                      role="button"
                      tabIndex={0}
                    >
                      Projects
                    </NavItem>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <NavItem
                      title="Contact"
                      onClick={closeNavbar}
                      onKeyDown={closeNavbar}
                      $isActive={pathname === '/contact'}
                      role="button"
                      tabIndex={0}
                    >
                      Contact
                    </NavItem>
                  </Link>
                </li>
              </NavLinks>
            </CollapseWrapper>
          ),
      )}
    </>
  );
};

const NavItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.brand : theme.colors.grey)};
  justify-content: center;
  min-width: 10vw;

  :hover {
    color: ${({ $isActive, theme }) =>
      darken(0.05, $isActive ? theme.colors.brand : theme.colors.grey)};
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
