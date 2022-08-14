import { ReactNode } from 'react';
import { Typography, TypographyProps } from './styles';

interface Props extends Partial<Omit<TypographyProps, 'as'>> {
  children: ReactNode;
  htmlFor?: string;
}

const variantAsMapper = {
  md: 'p' as const,
  sm: 'p' as const,
  h1: 'h1' as const,
  h2: 'h2' as const,
  label: 'label' as const,
};

const BaseText = ({
  children,
  variant = 'md',
  color = 'primary',
  textAlign = 'start',
  ...props
}: Props) => (
  <Typography
    variant={variant}
    as={variantAsMapper[variant]}
    color={color}
    textAlign={textAlign}
    {...props}
  >
    {children}
  </Typography>
);

export default BaseText;
