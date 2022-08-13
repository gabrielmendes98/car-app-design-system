import { HTMLProps, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

const BaseButton = ({ children }: Props) => <button>{children}</button>;

export default BaseButton;
