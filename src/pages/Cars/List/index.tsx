import { Icon } from '@iconify/react';
import Button from 'components/Button';
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
  </Section>
);

export default CarsList;
