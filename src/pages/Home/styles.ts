import styled, { css } from 'styled-components';
import { HEADER_HEIGHT, MAIN_PADDING } from 'common/constants';

export const Banner = styled.section(
  ({ theme }) => css`
    position: relative;
    left: -${MAIN_PADDING};
    padding: -20px;
    top: -${HEADER_HEIGHT};
    z-index: 1;
    width: calc(100% + 2 * ${MAIN_PADDING});

    img {
      width: 100%;
      height: auto;
    }
  `,
);

export const CardsCarousel = styled.ul(
  ({ theme }) => css`
    list-style: none;
    display: flex;
    gap: ${theme.spacing(12.625)};
    overflow-x: auto;

    > li {
      width: ${theme.spacing(35.125)};
      min-width: ${theme.spacing(35.125)};
      max-width: ${theme.spacing(35.125)};
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `,
);

export const CarouselContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(8.75)};
    padding: 0 ${theme.spacing(3)};
    justify-content: center;
  `,
);

export const Button = styled.button(
  ({ theme }) => css`
    all: unset;
    font-size: 2.5rem;
  `,
);
