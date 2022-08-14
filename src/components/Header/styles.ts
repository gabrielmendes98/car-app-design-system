import styled, { css } from 'styled-components';
import { buttonFontStyle } from 'components/Button/Base/styles';

export const HeaderBase = styled.header(
  ({ theme }) => css`
    height: ${theme.spacing(12)};
    display: flex;
    background-color: ${theme.palette.primary.main};
    align-items: center;
    padding: 0 ${theme.spacing(3)};
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
