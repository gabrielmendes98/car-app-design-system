import { Icon } from '@iconify/react';
import Button from 'components/Button';

const Home = () => (
  <section>
    <h1>Home page</h1>
    <Button variant="outlined" startIcon={<Icon icon="carbon:add" />}>
      Ver carro
    </Button>
    <Button variant="contained" startIcon={<Icon icon="carbon:add" />}>
      Ver carro
    </Button>
    <Button
      variant="outlined"
      fontSize="md"
      startIcon={<Icon icon="carbon:add" />}
    >
      Ver carro
    </Button>
    <Button
      variant="contained"
      fontSize="md"
      startIcon={<Icon icon="carbon:add" />}
    >
      Ver carro
    </Button>
    <Button
      variant="outlined"
      fontSize="md"
      startIcon={<Icon icon="carbon:add" />}
      color="white"
    >
      Ver carro
    </Button>
  </section>
);

export default Home;
