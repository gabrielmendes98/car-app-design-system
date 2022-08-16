import styled from 'styled-components';
import carPlaceholder from 'assets/add-car-placeholder.png';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 604px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
`;

export const ImagePart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DataPart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

export const ImagePreview = styled.div`
  width: 225px;
  height: 225px;
  background-color: red;
  border-radius: 24px;
  overflow: hidden;
  background: url(${carPlaceholder});

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
