import styled, { css, DefaultTheme } from 'styled-components';

export interface StyledProps {
  theme: DefaultTheme;
  variant: 'outlined' | 'contained';
  fontSize: 'md' | 'sm';
}

const desktopFontStyleMapper = {
  md: css`
    font-size: 1.25rem;
    line-height: 150%;
  `,
  sm: css`
    font-size: 1rem;
    line-height: 200%;
  `,
};

const mobileFontStyleMapper = {
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

const fontStyle = ({ theme, fontSize }: StyledProps) =>
  css`
    font-weight: 500;
    ${desktopFontStyleMapper[fontSize]}

    @media ${theme.device.mobile} {
      ${mobileFontStyleMapper[fontSize]}
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
    ${fontStyle}
  `,
);
