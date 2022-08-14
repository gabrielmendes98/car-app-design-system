import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  max-width: 100%;
`;

export const Image = styled.div(
  ({ theme }) => css`
    max-width: ${theme.spacing(35.125)};
    position: relative;
    top: 32px;

    img {
      width: ${theme.spacing(33)};
      height: auto;
    }
  `,
);

export const InfoCard = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(3)} ${theme.spacing(4)};
    border: 1px solid ${theme.palette.primary.main};
    border-radius: ${theme.spacing(3)};
  `,
);

export const ResumeList = styled.ul(
  ({ theme }) => css`
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
    margin-top: ${theme.spacing(2)};
  `,
);

export const ResumeItem = styled.li(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};

    svg {
      font-size: 1.25rem;
    }
  `,
);
