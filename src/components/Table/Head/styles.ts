import styled, { css } from 'styled-components';

export const TableHeadContainer = styled.thead(
  ({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};

    tr {
      th:first-of-type {
        border-radius: 6px 0 0 6px;
      }

      th:last-of-type {
        border-radius: 0 6px 6px 0;
      }
    }
  `,
);
