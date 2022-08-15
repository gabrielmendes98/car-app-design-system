import styled, { css } from 'styled-components';

export const cardWidth = 281;
export const cardGap = 101;
export const mobileCardWidth = 278;
export const mobileCardGap = 24;

export const CarouselContainer = styled.section(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(8.75)};
    padding: 0 ${theme.spacing(3)};
    justify-content: center;

    @media ${theme.device.mobile} {
      padding: 0;
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
      display: none;
    }

    @media ${theme.device.mobile} {
      gap: ${mobileCardGap}px;

      > li {
        width: ${mobileCardWidth}px;
        min-width: ${mobileCardWidth}px;

        :first-of-type {
          margin-left: ${mobileCardGap}px;
        }

        :last-of-type {
          margin-right: ${mobileCardGap}px;
        }
      }
    }
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

    @media ${theme.device.mobile} {
      display: none;
    }
  `,
);
