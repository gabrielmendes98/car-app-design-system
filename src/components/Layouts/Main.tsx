import { ReactNode } from 'react';
import Header from 'components/Header';
import { Main, Container } from './styles';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <Container>
    <Header />

    <Main>{children}</Main>
  </Container>
);

export default MainLayout;
