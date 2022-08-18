import { render, screen, userEvent, waitFor } from 'test-utils';
import AddCarForm from '../Add';

const mockData = {
  name: 'nome',
  year: '2015',
  maxSpeed: '180',
  economyRate: '10',
  usersRate: '10',
  link: 'www.google.com',
};

it('should be able to add a car', async () => {
  const { store } = render(<AddCarForm />);

  const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

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
    'fake.url.com',
  );

  userEvent.click(screen.getByRole('button', { name: /adicionar novo/i }));

  await waitFor(() => {
    expect(store.getState().cars.entities['1']).toMatchObject({
      ...mockData,
      imageUrl: 'fake.url.com',
      imageAlt: 'nome 2015',
      id: 1,
      maxSpeed: 180,
      economyRate: 10,
      usersRate: 10,
    });
  });
});

it('should hide modal when click on cancel', async () => {
  const { store } = render(<AddCarForm />, {
    preloadedState: { modal: { visible: true, content: null } },
  });

  userEvent.click(screen.getByRole('button', { name: /cancelar/i }));

  await waitFor(() => {
    expect(store.getState().modal.visible).toBe(false);
  });
});
