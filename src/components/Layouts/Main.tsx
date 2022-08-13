import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Main, Container } from './styles';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <Container>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    </header>

    <Main component="main">{children}</Main>

    <footer>my footer</footer>
  </Container>
);

export default MainLayout;
