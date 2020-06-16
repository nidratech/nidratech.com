import { forwardRef, ReactNode, Ref } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface Props {
  children?: ReactNode;
  onClick?: (...args: any[]) => void;
  type?: string;
  as?: string;
  disabled?: boolean;
}

function Button({ children, onClick, ...props }: Props, ref: Ref<HTMLButtonElement>) {
  return (
    // @ts-ignore
    <StyledButton ref={ref} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  min-width: 8rem;
  background-color: ${({ theme }) => theme.colors.brand};
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.brand)};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => lighten(0.2, theme.colors.brand)};
  }
`;

export default forwardRef(Button);
