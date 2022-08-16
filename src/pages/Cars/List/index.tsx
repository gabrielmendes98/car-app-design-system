import { Icon } from '@iconify/react';
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

const CarsList = () => (
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
    </Header>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell as="th">Nome</TableCell>
          <TableCell as="th">Ano</TableCell>
          <TableCell as="th">Velocidade máx Km/h</TableCell>
          <TableCell as="th">Nota Economia</TableCell>
          <TableCell as="th">Nota usuários</TableCell>
          <TableCell as="th"></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Ano</TableCell>
          <TableCell>Velocidade máx Km/h</TableCell>
          <TableCell>Nota Economia</TableCell>
          <TableCell>Nota usuários</TableCell>
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
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Ano</TableCell>
          <TableCell>Velocidade máx Km/h</TableCell>
          <TableCell>Nota Economia</TableCell>
          <TableCell>Nota usuários</TableCell>
          <TableCell
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <IconButton title="delete item" size={1.25}>
              <Icon icon="akar-icons:trash-can" />
            </IconButton>
            <IconButton title="edit item" size={1.25}>
              <Icon icon="clarity:edit-line" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Section>
);

export default CarsList;
