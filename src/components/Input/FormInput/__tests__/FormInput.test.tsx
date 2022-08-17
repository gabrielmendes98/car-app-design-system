import { render, userEvent, screen, waitFor } from 'test-utils';
import FormInput from '../';

it('should change value and call onChange on input change', async () => {
  const onChange = jest.fn();
  render(<FormInput name="test" label="test" onChange={onChange} />);

  userEvent.type(screen.getByLabelText(/test/i), 'blabla');

  await waitFor(() => {
    expect(screen.getByLabelText(/test/i)).toHaveValue('blabla');
  });

  expect(onChange).toHaveBeenCalled();
});
