import { ComponentPropsWithoutRef } from 'react';
import Text from 'components/Text';
import { Input, InputWrapper } from './styles';

interface Props extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
}

const BaseInput = ({ label, name, ...props }: Props) => (
  <div>
    <Text variant="label" htmlFor={name}>
      {label}
    </Text>
    <InputWrapper>
      <Input name={name} id={name} {...props} />
    </InputWrapper>
  </div>
);

export default BaseInput;
