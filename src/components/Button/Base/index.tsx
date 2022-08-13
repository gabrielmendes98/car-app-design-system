import { HTMLProps, ReactNode } from 'react';
import { Button, StartIcon, ButtonProps } from './styles';

interface Props
  extends Omit<HTMLProps<HTMLButtonElement>, 'color' | 'shape'>,
    Partial<ButtonProps> {
  children: ReactNode;
  startIcon?: ReactNode;
}

const BaseButton = ({
  children,
  variant = 'contained',
  fontSize = 'sm',
  startIcon: startIconProp,
  color = 'primary',
  shape = 'rounded',
}: Props) => {
  const startIcon = startIconProp && (
    <StartIcon variant={variant} fontSize={fontSize} color={color}>
      {startIconProp}
    </StartIcon>
  );

  return (
    <Button variant={variant} fontSize={fontSize} color={color} shape={shape}>
      {startIcon}
      {children}
    </Button>
  );
};

export default BaseButton;
