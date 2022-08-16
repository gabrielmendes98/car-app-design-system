import { Icon } from '@iconify/react';
import carPlaceholder from 'assets/add-car-placeholder.png';
import Button from 'components/Button';
import Text from 'components/Text';
import CarForm from '../Form';
import { Container } from './styles';

const initialValues = {
  imageUrl: carPlaceholder,
  name: '',
  year: '',
  maxSpeed: '',
  economyRate: '',
  usersRate: '',
  link: '',
};

const AddCarForm = () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Text variant="h2" marginBottom={3}>
        Adicionar novo
      </Text>

      <CarForm initialValues={initialValues} onSubmit={handleSubmit}>
        <Button variant="text" marginRight={3}>
          Cancelar
        </Button>
        <Button startIcon={<Icon icon="carbon:add" />} type="submit">
          Adicionar Novo
        </Button>
      </CarForm>
    </Container>
  );
};

export default AddCarForm;
