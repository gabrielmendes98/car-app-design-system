import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const toggleMenu = () => setMenuOpen(init => !init);

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
        <Button onClick={toggleMenu}>
          <Icon icon="ant-design:menu-outlined" />
        </Button>
        <Menu open={menuOpen} handleClose={() => setMenuOpen(false)} />
      </MobileHeader>
    </HeaderBase>
  );
};

export default Header;
