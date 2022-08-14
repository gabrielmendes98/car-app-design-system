import { Link, useLocation } from 'react-router-dom';
import Logo from 'components/Logo';
import { HeaderBase, Navigation, LinksList, Item } from './styles';

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <HeaderBase transparent={isHome}>
      <Logo color="white" />

      <Navigation>
        <LinksList>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/about">Sobre</Link>
          </Item>
          <Item>
            <Link to="/cars">Tabela</Link>
          </Item>
          <Item>
            <Link to="/contact">Fale conosco</Link>
          </Item>
          <Item>
            <Link to="/login">Entrar</Link>
          </Item>
        </LinksList>
      </Navigation>
    </HeaderBase>
  );
};

export default Header;
