import { render, screen, userEvent, waitFor } from 'test-utils';
import Modal from '../index';

beforeAll(() => {
  const portalRoot = document.createElement('div');
  portalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(portalRoot);
});

it('should render modal if modal store is set to visible', () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
  });

  expect(screen.getByTestId('modal-container')).toBeInTheDocument();
});

it('should not render modal if modal store is not set to visible', () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: false, content: null } },
  });

  expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
});

it('should close when click outside modal', async () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
  });

  userEvent.click(document.body);

  await waitFor(() => {
    expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });
});

it('should close when click on close button', async () => {
  render(<Modal />, {
    preloadedState: { modal: { visible: true, content: null } },
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
  });

  expect(screen.getByText('fake content')).toBeInTheDocument();
});
