import { ReactNode } from 'react';
import { Button, StartIcon, ButtonProps } from './styles';

interface Props extends Partial<ButtonProps> {
  children: ReactNode;
  startIcon?: ReactNode;
}

const BaseButton = ({
  children,
  variant = 'contained',
  size = 'sm',
  startIcon: startIconProp,
  color = 'primary',
  shape = 'rounded',
  ...props
}: Props) => {
  const startIcon = startIconProp && (
    <StartIcon variant={variant} size={size} color={color}>
      {startIconProp}
    </StartIcon>
  );

  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      color={color}
      shape={shape}
    >
      {startIcon}
      {children}
    </Button>
  );
};

export default BaseButton;
