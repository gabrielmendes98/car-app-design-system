import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import carsService from 'api/services/cars';
import { Car } from 'common/types/car';
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

const CarsList = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const loadMoreCars = () => {
    const lastCar = cars.at(-1);

    if (lastCar) {
      const lastId = lastCar.id;

      carsService
        .infiniteScroll(lastId)
        .then(newCars => setCars(init => [...init, ...newCars]));
    }
  };

  useEffect(() => {
    carsService.list().then(setCars);
  }, []);

  return (
    <Section>
      <Header>
        <Text variant="h1">Lista</Text>
        <Button
          size="sm"
          startIcon={<Icon icon="carbon:add" />}
          variant="outlined"
        >
          Adicionar Novo
        </Button>

        <Button onClick={loadMoreCars}>load more</Button>
      </Header>

      <Table>
        <TableHead>
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
    </Section>
  );
};

export default CarsList;
