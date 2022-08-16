import { NavLink, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import Logo from 'components/Logo';
import { BaseMenu, BaseMenuProps, Item, LinksList, Navigation } from './styles';

interface Props extends Omit<BaseMenuProps, 'theme'> {
  handleClose: () => void;
}

const Menu = ({ open, handleClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useOnClickOutside(ref, handleClose);

  useEffect(() => {
    handleClose();
  }, [location]);

  return (
    <BaseMenu open={open} ref={ref}>
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
};

export default Menu;
