import { HTMLProps, ReactNode } from 'react';
import { Button, StartIcon, StyledProps } from './styles';

interface Props
  extends Omit<HTMLProps<HTMLButtonElement>, 'color'>,
    Partial<StyledProps> {
  children: ReactNode;
  startIcon?: ReactNode;
}

const BaseButton = ({
  children,
  variant = 'contained',
  fontSize = 'sm',
  startIcon: startIconProp,
  color = 'primary',
}: Props) => {
  const startIcon = startIconProp && (
    <StartIcon variant={variant} fontSize={fontSize} color={color}>
      {startIconProp}
    </StartIcon>
  );

  return (
    <Button variant={variant} fontSize={fontSize} color={color}>
      {startIcon}
      {children}
    </Button>
  );
};

export default BaseButton;
