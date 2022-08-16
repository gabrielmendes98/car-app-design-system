import { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';
import { colorMapper, convertHexToRGBA } from 'common/styles/utils';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size: number;
  color: 'primary' | 'secondary' | 'tertiary' | 'white';
}

export const Button = styled.button<ButtonProps>(
  ({ size, color }) => css`
    all: unset;
    cursor: pointer;
    font-size: ${size}rem;
    color: ${colorMapper[color]};

    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:active {
      background-color: ${convertHexToRGBA(colorMapper[color], 0.1)};
    }
  `,
);
