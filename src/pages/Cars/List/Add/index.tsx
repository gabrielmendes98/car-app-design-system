import { Icon } from '@iconify/react';
import { useAppDispatch } from 'store/hooks';
import { hideModal } from 'store/slices/modal';
import Button from 'components/Button';
import Text from 'components/Text';
import CarForm from '../Form';
import { Container } from './styles';

const initialValues = {
  imageUrl: '',
  name: '',
  year: '',
  maxSpeed: '',
  economyRate: '',
  usersRate: '',
  link: '',
};

const AddCarForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: typeof initialValues) => {
    // o correto seria enviar para um backend com o header 'Content-Type': 'multipart/form-data'
    // contudo, como fiz sem backend, só adicionei ao store
    console.log(values);
  };

  return (
    <Container>
      <Text variant="h2" marginBottom={3}>
        Adicionar novo
      </Text>

      <CarForm initialValues={initialValues} onSubmit={handleSubmit}>
        <Button
          variant="text"
          marginRight={3}
          onClick={() => dispatch(hideModal())}
        >
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
