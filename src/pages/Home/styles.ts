import styled, { css } from 'styled-components';
import { HEADER_HEIGHT } from 'common/constants';

export const Banner = styled.section(
  ({ theme }) => css`
    position: relative;
    left: 0;
    top: -${HEADER_HEIGHT};
    z-index: 1;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  `,
);
