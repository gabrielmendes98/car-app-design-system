import { ComponentPropsWithoutRef } from 'react';
import Text from 'components/Text';
import { Input, InputWrapper } from './styles';

interface Props extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
}

const BaseInput = ({ label, name, ...props }: Props) => {
  console.log('input');

  return (
    <>
      <Text variant="label" htmlFor={name}>
        {label}
      </Text>
      <InputWrapper>
        <Input name={name} id={name} {...props} />
      </InputWrapper>
    </>
  );
};

export default BaseInput;
