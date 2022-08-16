import Routes from 'routes/Routes';
import MainLayout from 'components/Layouts/Main';
import Modal from 'components/Modal';

const App = () => (
  <MainLayout>
    <Modal />
    <Routes />
  </MainLayout>
);

export default App;
