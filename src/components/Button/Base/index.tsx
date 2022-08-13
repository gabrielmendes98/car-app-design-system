import { HTMLProps, ReactNode } from 'react';
import { Button, StyledProps } from './styles';

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  variant?: StyledProps['variant'];
}

const BaseButton = ({ children, variant = 'contained' }: Props) => (
  <Button variant={variant}>{children}</Button>
);

export default BaseButton;
