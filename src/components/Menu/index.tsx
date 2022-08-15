import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo';
import { BaseMenu, BaseMenuProps, Item, LinksList, Navigation } from './styles';

interface Props extends Omit<BaseMenuProps, 'theme'> {}

const Menu = ({ open }: Props) => (
  <BaseMenu open={open}>
    <Logo color="primary" />

    <Navigation>
      <LinksList>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/contact">Fale conosco</NavLink>
        </Item>
        <Item>
          <NavLink to="/about">Sobre</NavLink>
        </Item>
        <Item>
          <NavLink to="/cars">Tabela</NavLink>
        </Item>
      </LinksList>
    </Navigation>
  </BaseMenu>
);

export default Menu;
