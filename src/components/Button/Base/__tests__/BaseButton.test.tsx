import { render, userEvent, screen } from 'test-utils';
import Button from '../index';

// em um design system real, testaria as variantes de estilos, mas por falta de tempo, neste desafio, dei preferencia a outras coisas mais importantes

it('should call function on click', () => {
  const func = jest.fn();
  render(<Button onClick={func()}>click me</Button>);
  userEvent.click(screen.getByRole('button', { name: 'click me' }));
  expect(func).toHaveBeenCalled();
});

it('should display icon', () => {
  const FakeIcon = () => <div>fake icon</div>;
  render(<Button startIcon={<FakeIcon />}>click me</Button>);
  expect(screen.getByText('fake icon')).toBeInTheDocument();
});

it('should render children', () => {
  const FakeChildren = () => <div>fake children</div>;
  render(
    <Button>
      <FakeChildren />
    </Button>,
  );
  expect(screen.getByText('fake children')).toBeInTheDocument();
});

it('should be able to change type to submit', () => {
  render(<Button type="submit">submit</Button>);
  expect(screen.getByRole('button', { name: 'submit' })).toHaveAttribute(
    'type',
    'submit',
  );
});

it('should be able to change type to button', () => {
  render(<Button type="button">button</Button>);
  expect(screen.getByRole('button', { name: 'button' })).toHaveAttribute(
    'type',
    'button',
  );
});
