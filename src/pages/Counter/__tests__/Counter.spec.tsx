import { render, screen, userEvent, waitFor } from 'test-utils';
import { initialState } from 'store/slices/counter';
import Counter from '../index';

const getCountDisplay = () => screen.getByTestId('count-display');
const getIncrementButton = () => screen.getByLabelText('Increment value');

it('should increment', async () => {
  render(<Counter />);

  expect(getCountDisplay()).toHaveTextContent('0');

  // is a button but have aria-label
  userEvent.click(getIncrementButton());

  await waitFor(() => {
    expect(getCountDisplay()).toHaveTextContent('1');
  });
});

it('should increment with different initial value', async () => {
  render(<Counter />, {
    preloadedState: {
      counter: {
        ...initialState,
        value: 10,
      },
    },
  });

  expect(getCountDisplay()).toHaveTextContent('10');

  // is a button but have aria-label
  userEvent.click(getIncrementButton());

  await waitFor(() => {
    expect(getCountDisplay()).toHaveTextContent('11');
  });
});
