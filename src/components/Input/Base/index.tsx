import Text from 'components/Text';
import { Input, InputWrapper } from './styles';

interface Props {
  label: string;
  name: string;
}

const BaseInput = ({ label, name }: Props) => {
  console.log('input');

  return (
    <>
      <Text variant="label" htmlFor={name}>
        {label}
      </Text>
      <InputWrapper>
        <Input name={name} id={name} />
      </InputWrapper>
    </>
  );
};

export default BaseInput;
