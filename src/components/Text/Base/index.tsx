import { ReactNode } from 'react';
import { Typography, TypographyProps } from './styles';

interface Props extends Partial<Omit<TypographyProps, 'as'>> {
  children: ReactNode;
  htmlFor?: string;
}

const variantAsMapper = {
  p1: 'p' as const,
  p2: 'p' as const,
  h1: 'h1' as const,
  h2: 'h2' as const,
  label: 'label' as const,
};

const Text = ({
  children,
  variant = 'p1',
  color = 'primary',
  ...props
}: Props) => (
  <Typography
    variant={variant}
    as={variantAsMapper[variant]}
    color={color}
    {...props}
  >
    {children}
  </Typography>
);

export default Text;
