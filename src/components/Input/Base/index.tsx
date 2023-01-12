import { ComponentPropsWithoutRef, memo } from 'react';
import Text from 'components/Text';
import { Container, Input, InputWrapper } from './styles';

export interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
}

const BaseInput = ({ label, name, id, ...props }: BaseInputProps) => (
  <Container>
    <Text variant="label" htmlFor={name} color="inherit">
      {label}
    </Text>
    <InputWrapper>
      <Input name={name} id={id || name} {...props} />
    </InputWrapper>
  </Container>
);

export default memo(BaseInput);
