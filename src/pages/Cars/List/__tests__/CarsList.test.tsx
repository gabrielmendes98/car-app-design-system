import { screen, render, within, userEvent } from 'test-utils';
import carsService from 'api/services/cars';
import CarsList from '../index';

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
          year: '2019',
          maxSpeed: 159,
          economyRate: 1,
          usersRate: 2,
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
        },
      ]),
    );
  });

  it('should render cars list correctly', async () => {
    render(<CarsList />);

    expect(await screen.findByText('Mustang')).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getByText('159 Km/h')).toBeInTheDocument();
    expect(screen.getByText('1/10')).toBeInTheDocument();
    expect(screen.getByText('2/10')).toBeInTheDocument();
  });

  it('should open edit car screen', async () => {
    render(<CarsList />);

    userEvent.click((await screen.findAllByTitle('editar item'))[0]);

    expect(await screen.findByTestId('edit-car-modal')).toBeInTheDocument();
  });

  it('should open new car screen', async () => {
    render(<CarsList />);

    userEvent.click(screen.getByRole('button', { name: /adicionar novo/i }));

    expect(await screen.findByTestId('add-car-modal')).toBeInTheDocument();
  });
});

describe('with api not working correctly', () => {
  beforeEach(() => {
    mockedCarsService.list.mockReturnValue(Promise.reject());
  });

  it('should  display empty table', async () => {
    render(<CarsList />);

    expect(screen.queryByText('Mustang')).not.toBeInTheDocument();
    expect(document.querySelector('tbody')?.childNodes).toHaveLength(0);
  });
});
