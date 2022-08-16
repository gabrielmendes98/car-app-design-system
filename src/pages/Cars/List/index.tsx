import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { listFirstCars, listMoreCars, selectAllCars } from 'store/slices/cars';
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

const CarsList = () => {
  const cars = useAppSelector(selectAllCars);
  const dispatch = useAppDispatch();

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
                  <IconButton title="delete item" size={1.25}>
                    <Icon icon="akar-icons:trash-can" />
                  </IconButton>
                  <IconButton title="edit item" size={1.25}>
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
