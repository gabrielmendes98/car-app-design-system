import styled, { css, DefaultTheme } from 'styled-components';
import { HEADER_HEIGHT } from 'common/constants';
import { buttonFontStyle } from 'components/Button/Base/styles';

interface HeaderBaseProps {
  theme: DefaultTheme;
  transparent?: boolean;
}

export const HeaderBase = styled.header<HeaderBaseProps>(
  ({ theme, transparent = false }) => css`
    height: ${HEADER_HEIGHT};
    display: flex;
    background-color: ${transparent
      ? 'transparent'
      : theme.palette.primary.main};
    padding: ${theme.spacing(2)} ${theme.spacing(3)};
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

export const DesktopHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;

    @media ${theme.device.mobile} {
      display: none;
    }
  `,
);

export const MobileHeader = styled.div(
  ({ theme }) => css`
    display: none;
    height: 100%;
    width: 100%;
    align-items: center;

    @media ${theme.device.mobile} {
      display: flex;
    }
  `,
);

export const Button = styled.button(
  ({ theme }) => css`
    all: unset;
    color: ${theme.palette.common.white};
    font-size: 2.625rem;
  `,
);
