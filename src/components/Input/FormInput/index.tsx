import { ChangeEvent, useState } from 'react';
import BaseInput, { BaseInputProps } from '../Base';

interface Props extends BaseInputProps {
  initialValue?: string;
}

const FormInput = ({ onChange, initialValue = '', ...props }: Props) => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return <BaseInput onChange={onValueChange} value={value} {...props} />;
};

export default FormInput;
