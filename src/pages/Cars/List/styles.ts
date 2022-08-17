import styled, { css } from 'styled-components';

export const Section = styled.section`
  max-width: 1052px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing(12)};
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
