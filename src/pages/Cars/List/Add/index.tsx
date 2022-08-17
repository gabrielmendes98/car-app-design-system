import { Icon } from '@iconify/react';
import toast from 'common/utils/toast';
import { useAppDispatch } from 'store/hooks';
import { hideModal } from 'store/slices/modal';
import { addCar } from 'store/slices/cars';
import Button from 'components/Button';
import Text from 'components/Text';
import CarForm, { FormSubmitFields } from '../Form';
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

  const handleSubmit = (values: FormSubmitFields, formData: FormData) => {
    // o correto seria enviar para um backend com o header 'Content-Type': 'multipart/form-data'
    // contudo, como fiz sem backend, só adicionei ao store.
    // a action 'addCar' na verdade deveria ser um thunk que iria salvar o argumento formData

    dispatch(
      addCar({
        imageUrl: values.imageUrl,
        name: values.name,
        year: values.year,
        maxSpeed: Number(values.maxSpeed),
        economyRate: Number(values.economyRate),
        usersRate: Number(values.usersRate),
        link: values.link,
      }),
    );
    toast.success('Carro adicionado com sucesso');
    dispatch(hideModal());
  };

  return (
    <Container id="add-car-modal">
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
