import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import {
  HeaderBase,
  Navigation,
  LinksList,
  Item,
  DesktopHeader,
  MobileHeader,
  Button,
} from './styles';

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <HeaderBase transparent={isHome}>
      <DesktopHeader>
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
      </DesktopHeader>

      <MobileHeader>
        <Button>
          <Icon icon="ant-design:menu-outlined" />
        </Button>
        <Menu open />
      </MobileHeader>
    </HeaderBase>
  );
};

export default Header;
