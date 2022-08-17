import { render, screen, userEvent, waitFor } from 'test-utils';
import UpdateCarForm from '../Update';

afterEach(() => {
  window.URL.createObjectURL = () => 'fake.url.com';
});

const initialCarsState = {
  ids: [1],
  entities: {
    '1': {
      name: 'nome',
      year: 'ano',
      link: 'www.google.com',
      imageUrl: 'fake.url.com',
      imageAlt: 'nome ano',
      id: 1,
      maxSpeed: 180,
      economyRate: 10,
      usersRate: 10,
    },
  },
  status: 'idle' as const,
};

it('should populate fields with correct car by its id', () => {
  render(<UpdateCarForm id={1} />, {
    preloadedState: {
      cars: initialCarsState,
    },
  });

  expect(screen.getByLabelText(/nome/i)).toHaveValue('nome');
  expect(screen.getByLabelText(/ano/i)).toHaveValue('ano');
  expect(screen.getByLabelText(/velocidade máxima km\/h/i)).toHaveValue('180');
  expect(screen.getByLabelText(/nota economia/i)).toHaveValue('10');
  expect(screen.getByLabelText(/nota usuários/i)).toHaveValue('10');
  expect(screen.getByLabelText(/link produto/i)).toHaveValue('www.google.com');
  expect(screen.getByAltText('preview da imagem do carro')).toHaveAttribute(
    'src',
    'fake.url.com',
  );
});

it('should be able to edit selected car', async () => {
  const mockData = {
    name: 'mustang',
    year: '2015',
    maxSpeed: '190',
    economyRate: '9',
    usersRate: '9',
    link: 'www.fakelink.com',
    imageAlt: 'mustang 2015',
    imageUrl: 'fake.image.com',
    id: 1,
  };
  const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  window.URL.createObjectURL = () => mockData.imageUrl;

  const { store } = render(<UpdateCarForm id={1} />, {
    preloadedState: {
      cars: initialCarsState,
    },
  });

  userEvent.clear(screen.getByLabelText(/nome/i));
  userEvent.clear(screen.getByLabelText(/ano/i));
  userEvent.clear(screen.getByLabelText(/velocidade máxima km\/h/i));
  userEvent.clear(screen.getByLabelText(/nota economia/i));
  userEvent.clear(screen.getByLabelText(/nota usuários/i));
  userEvent.clear(screen.getByLabelText(/link produto/i));

  await userEvent.type(screen.getByLabelText(/nome/i), mockData.name);
  await userEvent.type(screen.getByLabelText(/ano/i), mockData.year);
  await userEvent.type(
    screen.getByLabelText(/velocidade máxima km\/h/i),
    mockData.maxSpeed,
  );
  await userEvent.type(
    screen.getByLabelText(/nota economia/i),
    mockData.economyRate,
  );
  await userEvent.type(
    screen.getByLabelText(/nota usuários/i),
    mockData.usersRate,
  );
  await userEvent.type(screen.getByLabelText(/link produto/i), mockData.link);
  await userEvent.upload(screen.getByTestId('image-input'), file);

  expect(screen.getByAltText('preview da imagem do carro')).toHaveAttribute(
    'src',
    mockData.imageUrl,
  );

  userEvent.click(screen.getByRole('button', { name: /salvar/i }));

  await waitFor(() => {
    expect(store.getState().cars.entities['1']).toMatchObject({
      ...mockData,
      maxSpeed: Number(mockData.maxSpeed),
      economyRate: Number(mockData.economyRate),
      usersRate: Number(mockData.usersRate),
    });
  });
});

it('should hide modal when click on cancel', async () => {
  const { store } = render(<UpdateCarForm id={1} />, {
    preloadedState: {
      modal: { visible: true, content: null },
      cars: initialCarsState,
    },
  });

  userEvent.click(screen.getByRole('button', { name: /cancelar/i }));

  await waitFor(() => {
    expect(store.getState().modal.visible).toBe(false);
  });
});
