import styled, { css } from 'styled-components';
import { HEADER_HEIGHT, MAIN_PADDING } from 'common/constants';

export const cardWidth = 281;
export const cardGap = 101;

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
    gap: ${cardGap}px;
    overflow-x: auto;

    > li {
      flex-shrink: 0;
      width: ${cardWidth}px;
      min-width: ${cardWidth}px;
    }

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      /* display: none; */
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
    cursor: pointer;
    color: ${theme.palette.primary.main};

    :disabled {
      color: ${theme.palette.tertiary.main};
    }
  `,
);
