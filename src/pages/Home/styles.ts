import styled, { css } from 'styled-components';

export const Banner = styled.section(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  `,
);
