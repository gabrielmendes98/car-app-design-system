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

    <footer>my footer</footer>
  </Container>
);

export default MainLayout;
