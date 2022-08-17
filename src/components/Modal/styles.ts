import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.spacing(3)};
  margin: 0 32px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-height: calc(100% - 64px);
`;

export const ContentWrapper = styled.div`
  border-radius: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 24px;
    background-color: ${({ theme }) => theme.palette.tertiary.main};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 40px 0 40px;
`;
