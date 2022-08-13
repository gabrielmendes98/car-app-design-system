import styled, { css, DefaultTheme } from 'styled-components';
import theme from 'common/styles/theme';

interface BaseProps {
  theme: DefaultTheme;
  variant: 'outlined' | 'contained';
  fontSize: 'md' | 'sm';
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
}

export interface ButtonProps extends BaseProps {
  shape: 'rounded' | 'squared';
}

interface IconProps extends BaseProps {}

const colorMapper = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  tertiary: theme.palette.tertiary.main,
  white: theme.palette.common.white,
};

const contrastMapper = {
  primary: theme.palette.common.white,
  secondary: theme.palette.common.white,
  tertiary: theme.palette.primary.main,
  white: theme.palette.primary.main,
};

const shapeBorderMapper = {
  rounded: theme.spacing(2.625),
  squared: theme.spacing(0.5),
};

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

const outlinedButton = ({ variant, color }: ButtonProps) =>
  variant === 'outlined' &&
  css`
    background-color: transparent;
    color: ${colorMapper[color]};
  `;

const containedButton = ({ variant, color }: ButtonProps) =>
  variant === 'contained' &&
  css`
    background-color: ${colorMapper[color]};
    color: ${contrastMapper[color]};
  `;

const buttonFontStyle = ({ theme, fontSize }: ButtonProps) =>
  css`
    font-weight: 500;
    ${desktopButtonFontStyleMapper[fontSize]}

    @media ${theme.device.mobile} {
      ${mobileButtonFontStyleMapper[fontSize]}
    }
  `;

export const Button = styled.button<ButtonProps>(
  ({ theme, color, shape }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(9)};
    border: 1px solid ${colorMapper[color]};
    border-radius: ${shapeBorderMapper[shape]};
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

const iconFontStyle = ({ theme, fontSize }: IconProps) =>
  css`
    ${desktopIconFontStyleMapper[fontSize]}

    @media ${theme.device.mobile} {
      ${mobileIconFontStyleMapper[fontSize]}
    }
  `;

const outlinedIcon = ({ variant, color }: IconProps) =>
  variant === 'outlined' &&
  css`
    color: ${colorMapper[color]};
  `;

const containedIcon = ({ variant, color }: IconProps) =>
  variant === 'contained' &&
  css`
    color: ${contrastMapper[color]};
  `;

export const StartIcon = styled.span<IconProps>(
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
