import styled, { css } from 'styled-components';
import { paragrapSMFontStyle } from 'components/Text/Base/styles';

export const TableCellContainer = styled.td(
  ({ theme }) => css`
    ${paragrapSMFontStyle};
    padding: 20px 0;
    text-align: center;
  `,
);
