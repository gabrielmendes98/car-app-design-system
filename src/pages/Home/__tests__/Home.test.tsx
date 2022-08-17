import { render, screen, userEvent, waitFor } from 'test-utils';
import carsService from 'api/services/cars';
import Home from '../index';

jest.mock('api/services/cars');
const mockedCarsService = jest.mocked(carsService);

describe('with api working correctly', () => {
  beforeEach(() => {
    mockedCarsService.list.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          imageUrl: '',
          imageAlt: '',
          name: 'Mustang',
          year: '2015',
          maxSpeed: 180,
          economyRate: 9,
          usersRate: 8,
          link: 'fake.link.com',
        },
        {
          id: 2,
          imageUrl: '',
          imageAlt: '',
          name: 'Camaro',
          year: '2015',
          maxSpeed: 180,
          economyRate: 9,
          usersRate: 8,
          link: 'fake.link.com',
        },
        {
          id: 3,
          imageUrl: '',
          imageAlt: '',
          name: 'Fusion',
          year: '2015',
          maxSpeed: 180,
          economyRate: 9,
          usersRate: 8,
          link: 'fake.link.com',
        },
      ]),
    );
  });

  it('should render cars list correctly', async () => {
    render(<Home />, { renderWithRouter: true });

    const list = screen.getByTestId('cars-list');

    await waitFor(() => {
      expect(list.childNodes).toHaveLength(3);
    });
  });

  it('should be able to navigate to cars screen', async () => {
    render(<Home />, { renderWithRouter: true, route: '/' });

    userEvent.click(screen.getByRole('link', { name: /ver carros/i }));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/cars');
    });
  });
});

describe('with api error', () => {
  beforeEach(() => {
    mockedCarsService.list.mockReturnValue(Promise.reject());
  });

  it('should render empty list', async () => {
    render(<Home />, { renderWithRouter: true });

    const list = screen.getByTestId('cars-list');

    await waitFor(() => {
      expect(list.childNodes).toHaveLength(0);
    });
  });
});
