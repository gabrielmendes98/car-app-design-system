import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    color: ${theme.palette.secondary.main};

    &:focus-within {
      color: ${theme.palette.primary.main};
    }
  `,
);

export const Input = styled.input(
  ({ theme }) => css`
    all: unset;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    color: ${theme.palette.secondary.main};
    width: 100%;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};

    &:focus {
      color: ${theme.palette.primary.main};
    }
  `,
);

export const InputWrapper = styled.div(
  ({ theme }) => css`
    border: 1px solid ${theme.palette.secondary.main};
    border-radius: ${theme.spacing(0.75)};

    &:focus-within {
      border-color: ${theme.palette.primary.main};
    }
  `,
);
