import styled, { css, DefaultTheme } from 'styled-components';

export interface StyledProps {
  theme: DefaultTheme;
  variant: 'outlined' | 'contained';
  fontSize: 'md' | 'sm';
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
}

const desktopButtonFontStyleMapper = {
  md: css`
    font-size: 1.25rem;
    line-height: 150%;
  `,
  sm: css`
    font-size: 1rem;
    line-height: 200%;
  `,
};

const mobileButtonFontStyleMapper = {
  md: css`
    font-size: 1.25rem;
    line-height: 150%;
  `,
  sm: css`
    font-size: 1rem;
    line-height: 200%;
  `,
};

const outlinedButton = ({ theme, variant }: StyledProps) =>
  variant === 'outlined' &&
  css`
    background-color: transparent;
    color: ${theme.palette.primary.main};
  `;

const containedButton = ({ theme, variant }: StyledProps) =>
  variant === 'contained' &&
  css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.light};
  `;

const buttonFontStyle = ({ theme, fontSize }: StyledProps) =>
  css`
    font-weight: 500;
    ${desktopButtonFontStyleMapper[fontSize]}

    @media ${theme.device.mobile} {
      ${mobileButtonFontStyleMapper[fontSize]}
    }
  `;

export const Button = styled.button<StyledProps>(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(9)};
    border: 1px solid ${theme.palette.primary.main};
    border-radius: ${theme.spacing(2.625)};
    cursor: pointer;
    height: ${theme.spacing(6)};

    ${outlinedButton}
    ${containedButton}
    ${buttonFontStyle}
  `,
);

const desktopIconFontStyleMapper = {
  md: css`
    font-size: 1.875rem;
  `,
  sm: css`
    font-size: 1.5rem;
  `,
};

const mobileIconFontStyleMapper = {
  md: css`
    font-size: 1.875rem;
  `,
  sm: css`
    font-size: 1.5rem;
  `,
};

const iconFontStyle = ({ theme, fontSize }: StyledProps) =>
  css`
    ${desktopIconFontStyleMapper[fontSize]}

    @media ${theme.device.mobile} {
      ${mobileIconFontStyleMapper[fontSize]}
    }
  `;

const outlinedIcon = ({ theme, variant }: StyledProps) =>
  variant === 'outlined' &&
  css`
    color: ${theme.palette.primary.main};
  `;

const containedIcon = ({ theme, variant }: StyledProps) =>
  variant === 'contained' &&
  css`
    color: ${theme.palette.common.light};
  `;

export const StartIcon = styled.span<StyledProps>(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${theme.spacing(0.875)};
    font-size: 1.5rem;

    ${outlinedIcon}
    ${containedIcon}
    ${iconFontStyle}
  `,
);
