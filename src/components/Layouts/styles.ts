import styled from 'styled-components';
import { MAIN_PADDING } from 'common/constants';

export const Main = styled.main`
  flex: 1;
  padding-left: ${MAIN_PADDING};
  padding-right: ${MAIN_PADDING};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
