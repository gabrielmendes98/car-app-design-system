import toast from 'common/utils/toast';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { hideModal } from 'store/slices/modal';
import { selectCarById, updateCar } from 'store/slices/cars';
import Button from 'components/Button';
import Text from 'components/Text';
import CarForm, { FormSubmitFields } from '../Form';
import { Container } from './styles';
import { prepareCarToInitialValues } from './utils';

interface Props {
  id: number;
}

const UpdateCarForm = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const car = useAppSelector(state => selectCarById(state, id));

  console.log(car);

  const initialValues = prepareCarToInitialValues(car!);

  const handleSubmit = (values: FormSubmitFields, formData: FormData) => {
    // o correto seria enviar para um backend com o header 'Content-Type': 'multipart/form-data'
    // contudo, como fiz sem backend, só adicionei ao store.
    // a action 'updateCar' na verdade deveria ser um thunk que iria salvar o argumento formData

    dispatch(
      updateCar({
        id,
        changes: {
          imageUrl: values.imageUrl,
          name: values.name,
          year: values.year,
          maxSpeed: Number(values.maxSpeed),
          economyRate: Number(values.economyRate),
          usersRate: Number(values.usersRate),
          link: values.link,
        },
      }),
    );
    toast.success('Carro atualizado com sucesso');
    dispatch(hideModal());
  };

  return (
    <Container id="edit-car-modal">
      <Text variant="h2" marginBottom={3}>
        Editar carro
      </Text>

      <CarForm initialValues={initialValues} onSubmit={handleSubmit}>
        <Button
          variant="text"
          marginRight={3}
          onClick={() => dispatch(hideModal())}
        >
          Cancelar
        </Button>
        <Button type="submit">Salvar</Button>
      </CarForm>
    </Container>
  );
};

export default UpdateCarForm;
