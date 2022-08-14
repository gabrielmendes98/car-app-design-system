import styled, { css, DefaultTheme } from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { colorMapper } from 'common/styles/utils';

export interface TypographyProps extends ComponentPropsWithoutRef<'p'> {
  theme: DefaultTheme;
  variant: 'md' | 'sm' | 'h1' | 'h2' | 'label';
  as: 'p' | 'h1' | 'h2' | 'label';
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
  textAlign:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
}

const paragraph1FontStyle = ({ theme, variant }: TypographyProps) =>
  variant === 'md' &&
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
  (variant === 'sm' || variant === 'label') &&
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
  ({ color, textAlign }) => css`
    text-align: ${textAlign};
    color: ${colorMapper[color]};
    ${paragraph1FontStyle};
    ${paragraph2FontStyle};
    ${h1FontStyle};
    ${h2FontStyle};
  `,
);
