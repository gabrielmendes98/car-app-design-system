import { render, screen } from 'test-utils';
import Text from '../index';

// em um design system real, testaria as variantes de estilos, mas por falta de tempo, neste desafio, dei preferencia a outras coisas mais importantes

it('should render p element when p1 variant', () => {
  render(<Text variant="p1">text</Text>);
  expect(document.querySelector('p')).toBeInTheDocument();
});

it('should render p element when p2 variant', () => {
  render(<Text variant="p2">text</Text>);
  expect(document.querySelector('p')).toBeInTheDocument();
});

it('should render h1 element when h1 variant', () => {
  render(<Text variant="h1">text</Text>);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});

it('should render h2 element when h2 variant', () => {
  render(<Text variant="h2">text</Text>);
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
});

it('should render h2 element when h2 variant', () => {
  render(<Text variant="label">label</Text>);
  expect(document.querySelector('label')).toBeInTheDocument();
});
