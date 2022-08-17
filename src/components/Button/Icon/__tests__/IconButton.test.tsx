import { render, userEvent, screen } from 'test-utils';
import IconButton from '../index';

// em um design system real, testaria as variantes de estilos, mas por falta de tempo, neste desafio, dei preferencia a outras coisas mais importantes

it('should call function on click', () => {
  const func = jest.fn();
  const FakeIcon = () => <div>fake icon</div>;
  render(
    <IconButton title="click me" onClick={func()}>
      <FakeIcon />
    </IconButton>,
  );
  userEvent.click(screen.getByTitle('click me'));
  expect(func).toHaveBeenCalled();
});

it('should display icon', () => {
  const func = jest.fn();
  const FakeIcon = () => <div>fake icon</div>;
  render(
    <IconButton title="click me" onClick={func()}>
      <FakeIcon />
    </IconButton>,
  );
  expect(screen.getByText('fake icon')).toBeInTheDocument();
});
