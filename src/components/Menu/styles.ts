import styled, { css, DefaultTheme } from 'styled-components';
import { buttonFontStyle } from 'components/Button/Base/styles';

export interface BaseMenuProps {
  theme: DefaultTheme;
  open: boolean;
}

export const BaseMenu = styled.div<BaseMenuProps>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(33.75)};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.palette.common.superWhite};
    box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
    border-radius: 0px ${theme.spacing(3)} ${theme.spacing(3)} 0px;
    padding: ${theme.spacing(4)} ${theme.spacing(3)};
    gap: ${theme.spacing(5)};
  `,
);

export const Navigation = styled.nav(({ theme }) => css``);

export const LinksList = styled.ul(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: ${theme.spacing(4)};
  `,
);

export const Item = styled.li(
  ({ theme }) => css`
    ${() => buttonFontStyle({ theme, size: 'md' })};

    a {
      padding-bottom: 3px;
    }

    > a.active {
      border-bottom: 2px solid ${theme.palette.primary.main};
    }
  `,
);
