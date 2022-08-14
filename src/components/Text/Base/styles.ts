import styled, { css, DefaultTheme } from 'styled-components';
import { colorMapper } from 'common/styles/utils';

export interface TypographyProps {
  theme: DefaultTheme;
  variant: 'p1' | 'p2' | 'h1' | 'h2' | 'label';
  as: 'p' | 'h1' | 'h2' | 'label';
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
}

const paragraph1FontStyle = ({ theme, variant }: TypographyProps) =>
  variant === 'p1' &&
  css`
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 200%;

    @media ${theme.device.mobile} {
      font-weight: 300;
      font-size: 1rem;
      line-height: 200%;
    }
  `;

const paragraph2FontStyle = ({ theme, variant }: TypographyProps) =>
  (variant === 'p2' || variant === 'label') &&
  css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    @media ${theme.device.mobile} {
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
    }
  `;

const h1FontStyle = ({ theme, variant }: TypographyProps) =>
  variant === 'h1' &&
  css`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 150%;

    @media ${theme.device.mobile} {
      font-weight: 400;
      font-size: 4rem;
      line-height: 150%;
    }
  `;

const h2FontStyle = ({ theme, variant }: TypographyProps) =>
  variant === 'h2' &&
  css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;

    @media ${theme.device.mobile} {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 150%;
    }
  `;

export const Typography = styled.p<TypographyProps>(
  ({ color }) => css`
    color: ${colorMapper[color]};
    ${paragraph1FontStyle};
    ${paragraph2FontStyle};
    ${h1FontStyle};
    ${h2FontStyle};
  `,
);
