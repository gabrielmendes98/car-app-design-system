import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import toast from 'common/utils/toast';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  deleteCar,
  listFirstCars,
  listMoreCars,
  selectAllCars,
} from 'store/slices/cars';
import { showModal } from 'store/slices/modal';
import Button, { IconButton } from 'components/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/Table';
import Text from 'components/Text';
import { Header, Section } from './styles';
import AddCarForm from './Add';
import UpdateCarForm from './Update';

const CarsList = () => {
  const cars = useAppSelector(selectAllCars);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    const confirmed = confirm('Tem certeza que deseja deletar esse veículo?');

    if (confirmed) {
      dispatch(deleteCar(id));
      toast.success('Carro deletado com sucesso');
    }
  };

  useEffect(() => {
    dispatch(listFirstCars());
  }, []);

  return (
    <Section>
      <Header>
        <Text variant="h1">Lista</Text>
        <Button
          size="sm"
          startIcon={<Icon icon="carbon:add" />}
          variant="outlined"
          onClick={() => dispatch(showModal(<AddCarForm />))}
        >
          Adicionar Novo
        </Button>
      </Header>

      <InfiniteScroll
        loadMore={() => dispatch(listMoreCars())}
        hasMore={true}
        loader={<div key={0}>Loading ...</div>}
      >
        <Table>
          <TableHead sticky>
            <TableRow>
              <TableCell as="th">Nome</TableCell>
              <TableCell as="th" align="right">
                Ano
              </TableCell>
              <TableCell as="th">Velocidade máx Km/h</TableCell>
              <TableCell as="th">Nota Economia</TableCell>
              <TableCell as="th">Nota usuários</TableCell>
              <TableCell as="th"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cars.map(car => (
              <TableRow key={car.id}>
                <TableCell>{car.name}</TableCell>
                <TableCell align="right">{car.year}</TableCell>
                <TableCell>{`${car.maxSpeed} Km/h`}</TableCell>
                <TableCell>{`${car.economyRate}/10`}</TableCell>
                <TableCell>{`${car.usersRate}/10`}</TableCell>
                <TableCell
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <IconButton
                    title="deletar item"
                    size={1.25}
                    onClick={() => handleDelete(car.id)}
                  >
                    <Icon icon="akar-icons:trash-can" />
                  </IconButton>
                  <IconButton
                    title="editar item"
                    size={1.25}
                    onClick={() =>
                      dispatch(showModal(<UpdateCarForm id={car.id} />))
                    }
                  >
                    <Icon icon="clarity:edit-line" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </Section>
  );
};

export default CarsList;
