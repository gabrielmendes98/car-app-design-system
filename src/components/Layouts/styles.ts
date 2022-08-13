import styled from 'styled-components';

export const Main = styled.main`
  width: '100%';
  max-width: '1440px';
  margin: '0 auto';
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  height: '100%';
  width: '100%';
  flex: 1;
`;
