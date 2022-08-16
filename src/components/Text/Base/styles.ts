import styled, { css, DefaultTheme } from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { colorMapper, marginHandler } from 'common/styles/utils';
import { MarginHandler } from 'common/types/styles';

export interface TypographyProps
  extends ComponentPropsWithoutRef<'p'>,
    MarginHandler {
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

export const paragraphMDFontStyle = ({ theme, variant }: TypographyProps) =>
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

export const paragrapSMFontStyle = css`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;

  @media ${({ theme }) => theme.device.mobile} {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
  }
`;

const paragrapSMFontStyleCreator = ({ variant }: TypographyProps) =>
  (variant === 'sm' || variant === 'label') && paragrapSMFontStyle;

const h1FontStyle = ({ theme, variant }: TypographyProps) =>
  variant === 'h1' &&
  css`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 150%;

    @media ${theme.device.mobile} {
      font-weight: 400;
      font-size: 2rem;
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
    ${paragraphMDFontStyle};
    ${paragrapSMFontStyleCreator};
    ${h1FontStyle};
    ${h2FontStyle};
    ${marginHandler}
  `,
);
