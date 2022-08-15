import styled, { css } from 'styled-components';

export const FooterBannerContainer = styled.footer(
  ({ theme }) => css`
    margin-top: ${theme.spacing(6)};
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  `,
);

export const DesktopContainer = styled.section`
  display: flex;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const MobileContainer = styled.section(
  ({ theme }) => css`
    display: none;

    position: relative;
    width: calc(100% + 4px);
    left: -4px;

    @media ${theme.device.mobile} {
      display: flex;
    }
  `,
);

export const FooterDescriptionPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
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
  top: 16px;
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
