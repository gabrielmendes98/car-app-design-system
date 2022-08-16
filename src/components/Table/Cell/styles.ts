import styled, { css } from 'styled-components';
import { paragrapSMFontStyle } from 'components/Text/Base/styles';

export const TableCellContainer = styled.td(
  ({ align }) => css`
    display: table-cell;
    ${paragrapSMFontStyle};
    padding: 20px 20px;
    text-align: ${align};
  `,
);
