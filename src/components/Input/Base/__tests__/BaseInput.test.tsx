import { ChangeEvent, useState } from 'react';
import { render, screen, userEvent, waitFor } from 'test-utils';
import Input from '../index';

it('should render input and label elements', () => {
  render(<Input label="label test" name="lastName" />);
  expect(document.querySelector('label')).toHaveTextContent('label test');
  expect(document.querySelector('input')).toHaveAttribute('name', 'lastName');
});

it('should be able to edit input', async () => {
  const InputTest = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        label="label test"
        name="lastName"
        value={value}
        onChange={onChange}
      />
    );
  };

  render(<InputTest />);

  userEvent.type(screen.getByLabelText('label test'), 'aaa');

  await waitFor(() => {
    expect(screen.getByLabelText('label test')).toHaveValue('aaa');
  });
});
