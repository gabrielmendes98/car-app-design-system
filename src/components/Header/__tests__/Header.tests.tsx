import { screen, userEvent, render, waitFor } from 'test-utils';
import Header from '../index';

describe('in desktop', () => {
  it('should be able to navigate to home', async () => {
    render(<Header />, { renderWithRouter: true, route: '/xxx' });
    userEvent.click(screen.getByRole('link', { name: /home/i }));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });

  it('should be able to navigate to about', async () => {
    render(<Header />, { renderWithRouter: true, route: '/xxx' });
    userEvent.click(screen.getByRole('link', { name: /sobre/i }));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/about');
    });
  });

  it('should be able to navigate to car listing', async () => {
    render(<Header />, { renderWithRouter: true, route: '/xxx' });
    userEvent.click(screen.getByRole('link', { name: /tabela/i }));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/cars');
    });
  });

  it('should be able to navigate to contact us', async () => {
    render(<Header />, { renderWithRouter: true, route: '/xxx' });
    userEvent.click(screen.getByRole('link', { name: /fale conosco/i }));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/contact');
    });
  });

  it('should be able to navigate to login', async () => {
    render(<Header />, { renderWithRouter: true, route: '/xxx' });
    userEvent.click(screen.getByRole('link', { name: /entrar/i }));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/login');
    });
  });
});
