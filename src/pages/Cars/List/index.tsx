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
          <TableCell>Nome</TableCell>
          <TableCell>Ano</TableCell>
          <TableCell>Velocidade máx Km/h</TableCell>
          <TableCell>Nota Economia</TableCell>
          <TableCell>Nota usuários</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Ano</TableCell>
          <TableCell>Velocidade máx Km/h</TableCell>
          <TableCell>Nota Economia</TableCell>
          <TableCell>Nota usuários</TableCell>
          <TableCell>
            <IconButton title="delete item" size={1.5}>
              <Icon icon="akar-icons:trash-can" />
            </IconButton>
            <IconButton title="edit item" size={1.5}>
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
          <TableCell>
            <IconButton title="delete item" size={1.5}>
              <Icon icon="akar-icons:trash-can" />
            </IconButton>
            <IconButton title="edit item" size={1.5}>
              <Icon icon="clarity:edit-line" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Section>
);

export default CarsList;
