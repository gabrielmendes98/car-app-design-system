import styled, { css } from 'styled-components';
import { MAIN_PADDING } from 'common/constants';

export const FooterBannerContainer = styled.footer(
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

export const DesktopContainer = styled.section`
  display: block;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const MobileContainer = styled.section(
  ({ theme }) => css`
    display: none;

    @media ${theme.device.mobile} {
      display: block;
      position: absolute;
      right: -2px;
      top: ${MAIN_PADDING};
      left: -2px;
    }
  `,
);

export const FooterDescriptionPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  overflow: auto;
`;

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const MobileFooterDescriptionPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  position: absolute;
  left: 0;
  top: ${MAIN_PADDING};
  background: linear-gradient(
    270deg,
    rgba(29, 37, 39, 0.6) 15.42%,
    rgba(29, 37, 39, 0.552) 35.73%,
    rgba(29, 37, 39, 0.156) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );
  backdrop-filter: blur(5px);
  width: 100%;
  height: 59%;
  overflow: auto;
`;

export const MobileFooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(2.7)};
`;
