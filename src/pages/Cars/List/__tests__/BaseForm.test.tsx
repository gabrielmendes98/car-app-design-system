import { render, screen, userEvent, cleanup, act, waitFor } from 'test-utils';
import CarForm from '../Form';

afterEach(() => {
  cleanup();
});

// export const validations = yup.object().shape({
//   name: yup.string().trim().required(),
//   year: yup
//     .number()
//     .test(
//       'len',
//       'Um ano deve ter 4 digitos',
//       val => val!.toString().length === 4,
//     ),
//   maxSpeed: yup
//     .number()
//     .test('len', 'Deve ser entre 0 e 10', val => val! >= 0 && val! <= 10),
//   economyRate: yup
//     .number()
//     .test('len', 'Deve ser entre 0 e 10', val => val! >= 0 && val! <= 10),
//   usersRate: yup
//     .number()
//     .test('len', 'Deve ser entre 0 e 10', val => val! >= 0 && val! <= 10),
//   link: yup.string().trim().required(),
//   imageUrl: yup.string().trim().required(),
// });

it('should require name field', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        year: '1234',
        maxSpeed: '1',
        economyRate: '2',
        usersRate: '3',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('year field should have 4 digits', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1',
        maxSpeed: '1',
        economyRate: '2',
        usersRate: '3',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  await act(async () => {
    await userEvent.click(screen.getByRole('button', { name: 'submit' }));
  });

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('max speed should be a number', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: 'aa',
        economyRate: '2',
        usersRate: '3',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('max speed should be required', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: '',
        economyRate: '2',
        usersRate: '3',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('economy rate should be between 0 and 10', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: '1',
        economyRate: '22',
        usersRate: '3',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('users rate should be between 0 and 10', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: '1',
        economyRate: '2',
        usersRate: '33',
        link: 'mock.com',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('link should be required', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: '1',
        economyRate: '2',
        usersRate: '3',
        link: '',
        imageUrl: 'mock.com/image.png',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('image url should be required', async () => {
  const onSubmit = jest.fn();
  render(
    <CarForm
      onSubmit={onSubmit}
      initialValues={{
        name: 'name',
        year: '1234',
        maxSpeed: '1',
        economyRate: '2',
        usersRate: '3',
        link: 'fake.com',
        imageUrl: '',
      }}
    >
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  expect(await screen.findByText('Formulário inválido!')).toBeInTheDocument();
});

it('should call on submit when all fields are valid', async () => {
  const onSubmit = jest.fn();
  const initialValues = {
    name: 'name',
    year: '1234',
    maxSpeed: '1',
    economyRate: '2',
    usersRate: '3',
    link: 'fake.com',
    imageUrl: 'fake.com/image.png',
  };
  render(
    <CarForm onSubmit={onSubmit} initialValues={initialValues}>
      <button type="submit">submit</button>
    </CarForm>,
  );

  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith(
      {
        ...initialValues,
        image: '',
      },
      expect.anything(),
      expect.anything(),
    );
  });
});
