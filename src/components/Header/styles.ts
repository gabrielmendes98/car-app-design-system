import styled, { css, DefaultTheme } from 'styled-components';
import { buttonFontStyle } from 'components/Button/Base/styles';

interface HeaderBaseProps {
  theme: DefaultTheme;
  transparent?: boolean;
}

export const HeaderBase = styled.header<HeaderBaseProps>(
  ({ theme, transparent = false }) => css`
    height: ${theme.spacing(12)};
    display: flex;
    background-color: ${transparent
      ? 'transparent'
      : theme.palette.primary.main};
    align-items: center;
    padding: 0 ${theme.spacing(3)};
    z-index: 2;
  `,
);

export const Navigation = styled.nav(
  ({ theme }) => css`
    width: 100%;
  `,
);

export const LinksList = styled.ul(
  ({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-around;
  `,
);

export const Item = styled.li(
  ({ theme }) => css`
    color: ${theme.palette.common.white};
    ${() => buttonFontStyle({ theme, size: 'md' })}
    cursor: pointer;
    min-width: fit-content;
    max-width: ${theme.spacing(14.875)};
    flex: 1;
  `,
);
