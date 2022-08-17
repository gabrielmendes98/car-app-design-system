import { render, screen, userEvent, waitFor } from 'test-utils';
import Modal from '../index';

it('should render modal if modal store is set to visible', () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
    renderWithModal: false,
  });

  expect(screen.getByTestId('modal-container')).toBeInTheDocument();
});

it('should not render modal if modal store is not set to visible', () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: false, content: null } },
    renderWithModal: false,
  });

  expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
});

it('should close when click outside modal', async () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
    renderWithModal: false,
  });

  userEvent.click(document.body);

  await waitFor(() => {
    expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });
});

it('should close when click on close button', async () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
    renderWithModal: false,
  });

  userEvent.click(screen.getByTitle('fechar modal'));

  await waitFor(() => {
    expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });
});

it('should show content', async () => {
  const FakeContent = () => <div>fake content</div>;
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: <FakeContent /> } },
    renderWithModal: false,
  });

  expect(screen.getByText('fake content')).toBeInTheDocument();
});
