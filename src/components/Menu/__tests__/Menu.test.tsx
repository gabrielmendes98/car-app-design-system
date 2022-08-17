import { screen, userEvent, render, waitFor } from 'test-utils';
import Menu from '../index';

it('should be able to navigate to home and close menu on route change', async () => {
  const handleClose = jest.fn();
  render(<Menu open handleClose={handleClose} />, {
    renderWithRouter: true,
    route: '/xxx',
  });
  userEvent.click(screen.getByRole('link', { name: /home/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/');
  });
  expect(handleClose).toHaveBeenCalledTimes(2);
});

it('should be able to navigate to about and close menu on route change', async () => {
  const handleClose = jest.fn();
  render(<Menu open handleClose={handleClose} />, {
    renderWithRouter: true,
    route: '/xxx',
  });
  userEvent.click(screen.getByRole('link', { name: /sobre/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/about');
  });
  expect(handleClose).toHaveBeenCalledTimes(2);
});

it('should be able to navigate to car listing and close menu on route change', async () => {
  const handleClose = jest.fn();
  render(<Menu open handleClose={handleClose} />, {
    renderWithRouter: true,
    route: '/xxx',
  });
  userEvent.click(screen.getByRole('link', { name: /tabela/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/cars');
  });
  expect(handleClose).toHaveBeenCalledTimes(2);
});

it('should be able to navigate to contact us and close menu on route change', async () => {
  const handleClose = jest.fn();
  render(<Menu open handleClose={handleClose} />, {
    renderWithRouter: true,
    route: '/xxx',
  });
  userEvent.click(screen.getByRole('link', { name: /fale conosco/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/contact');
  });
  expect(handleClose).toHaveBeenCalledTimes(2);
});

it('should close menu when click outside it', async () => {
  const handleClose = jest.fn();
  render(<Menu open handleClose={handleClose} />, {
    renderWithRouter: true,
    route: '/xxx',
  });
  userEvent.click(document.body);

  await waitFor(() => {
    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});
