import { css } from 'styled-components';
import theme from './theme';

export const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

export const colorMapper = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  tertiary: theme.palette.tertiary.main,
  white: theme.palette.common.white,
  inherit: 'inherit',
};

export const contrastMapper = {
  primary: theme.palette.common.white,
  secondary: theme.palette.common.white,
  tertiary: theme.palette.primary.main,
  white: theme.palette.primary.main,
};

export const marginHandler = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
}) =>
  css`
    margin-top: ${theme.spacing(marginTop)};
    margin-right: ${theme.spacing(marginRight)};
    margin-bottom: ${theme.spacing(marginBottom)};
    margin-left: ${theme.spacing(marginLeft)};
  `;
