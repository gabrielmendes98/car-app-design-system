import { render, screen, userEvent, waitFor } from 'test-utils';
import CarInfoCard from '../index';

it('should display info', () => {
  render(
    <CarInfoCard
      id={1}
      name="Mustang"
      year="2015"
      maxSpeed={180}
      economyRate={9}
      usersRate={8}
    />,
    { renderWithRouter: true },
  );

  expect(screen.getByText(/mustang/i)).toBeInTheDocument();
  expect(screen.getByText(/2015/i)).toBeInTheDocument();
  expect(screen.getByText(/180 km\/h/i)).toBeInTheDocument();
  expect(screen.getByText(/9\/10/i)).toBeInTheDocument();
  expect(screen.getByText(/8\/10/i)).toBeInTheDocument();
});

it('should navigate to car info page', async () => {
  render(
    <CarInfoCard
      id={1}
      name="Mustang"
      year="2015"
      maxSpeed={180}
      economyRate={9}
      usersRate={8}
    />,
    { renderWithRouter: true, route: '/' },
  );

  userEvent.click(screen.getByRole('button', { name: /ver carro/i }));

  await waitFor(() => {
    expect(window.location.pathname).toBe('/cars/1');
  });
});
