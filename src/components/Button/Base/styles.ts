import styled, { css, DefaultTheme } from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';
import theme from 'common/styles/theme';
import {
  colorMapper,
  contrastMapper,
  convertHexToRGBA,
  marginHandler,
} from 'common/styles/utils';
import { MarginHandler } from 'common/types/styles';

interface BaseProps extends ComponentPropsWithoutRef<'button'> {
  theme: DefaultTheme;
  variant: 'outlined' | 'contained';
  size: 'md' | 'sm';
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
}

export interface ButtonProps extends BaseProps, MarginHandler {
  shape: 'rounded' | 'squared';
  fullWidth: boolean;
}

interface IconProps extends BaseProps {}

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

    &:active {
      background-color: ${convertHexToRGBA(colorMapper[color], 0.1)};
    }
  `;

const containedButton = ({ variant, color }: ButtonProps) =>
  variant === 'contained' &&
  css`
    background-color: ${colorMapper[color]};
    color: ${contrastMapper[color]};

    &:active {
      background-color: ${convertHexToRGBA(colorMapper[color], 0.9)};
    }
  `;

export const buttonFontStyle = ({ size }: { size: BaseProps['size'] }) =>
  css`
    font-weight: 500;
    ${desktopButtonFontStyleMapper[size]}

    @media ${({ theme }) => theme.device.mobile} {
      ${mobileButtonFontStyleMapper[size]}
    }
  `;

const buttonWidthStyle = ({ fullWidth }: ButtonProps) =>
  fullWidth
    ? css`
        width: 100%;
      `
    : css`
        padding: ${theme.spacing(1)} ${theme.spacing(9)};
      `;

export const Button = styled.button<ButtonProps>(
  ({ theme, color, shape }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colorMapper[color]};
    border-radius: ${shapeBorderMapper[shape]};
    cursor: pointer;
    height: ${theme.spacing(6)};

    ${outlinedButton}
    ${containedButton}
    ${buttonFontStyle}
    ${buttonWidthStyle}
    ${marginHandler}
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

const iconFontStyle = ({ theme, size }: IconProps) =>
  css`
    ${desktopIconFontStyleMapper[size]}

    @media ${theme.device.mobile} {
      ${mobileIconFontStyleMapper[size]}
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
