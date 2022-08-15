import styled, { css } from 'styled-components';
import { HEADER_HEIGHT, MAIN_PADDING } from 'common/constants';

export const Banner = styled.section(
  ({ theme }) => css`
    position: relative;
    left: -${MAIN_PADDING};
    top: -${HEADER_HEIGHT};
    z-index: 1;
    width: calc(100vw + 4px);

    img {
      width: 100%;
      height: auto;
    }
  `,
);
