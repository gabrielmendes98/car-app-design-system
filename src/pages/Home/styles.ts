import styled, { css } from 'styled-components';
import { HEADER_HEIGHT, MAIN_PADDING } from 'common/constants';

export const Banner = styled.section(
  ({ theme }) => css`
    position: relative;
    left: -${MAIN_PADDING};
    top: -${HEADER_HEIGHT};
    z-index: 1;
    width: calc(100% + 2 * ${MAIN_PADDING});

    img {
      width: 100%;
      height: auto;
    }
  `,
);

export const FooterBanner = styled.footer(
  ({ theme }) => css`
    margin-top: ${theme.spacing(6)};
    position: relative;
    left: -${MAIN_PADDING};
    bottom: -${MAIN_PADDING};
    width: calc(100% + 2 * ${MAIN_PADDING});

    img {
      position: relative;
      bottom: -${MAIN_PADDING};
      width: 100%;
      height: auto;
    }
  `,
);

export const FooterDescription = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  height: calc(100% - 4px);
  right: 0;
  top: ${MAIN_PADDING};
  background: linear-gradient(
    270deg,
    rgba(29, 37, 39, 0.6) 0%,
    rgba(29, 37, 39, 0.6) 24.79%,
    rgba(29, 37, 39, 0.534) 54.48%,
    rgba(29, 37, 39, 0.006) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );
  backdrop-filter: blur(5px);
  width: 57.5%;
  padding-right: 12%;
`;
