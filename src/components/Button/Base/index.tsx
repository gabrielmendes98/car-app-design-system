import { HTMLProps, ReactNode } from 'react';
import { Button, StyledProps } from './styles';

interface Props extends HTMLProps<HTMLButtonElement>, Partial<StyledProps> {
  children: ReactNode;
}

const BaseButton = ({
  children,
  variant = 'contained',
  fontSize = 'sm',
}: Props) => (
  <Button variant={variant} fontSize={fontSize}>
    {children}
  </Button>
);

export default BaseButton;
