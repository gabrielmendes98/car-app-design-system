import { ReactNode } from 'react';
import { Button, ButtonProps } from './styles';

interface Props extends Partial<ButtonProps> {
  children: ReactNode;
  title: string;
}

const IconButton = ({
  children,
  title,
  size = 1,
  color = 'primary',
  ...props
}: Props) => (
  <Button title={title} size={size} color={color} {...props}>
    {children}
  </Button>
);

export default IconButton;
