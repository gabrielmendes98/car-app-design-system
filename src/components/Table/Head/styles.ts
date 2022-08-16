import { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export interface TableHeadContainerProps
  extends ComponentPropsWithoutRef<'thead'> {
  sticky: boolean;
}

export const TableHeadContainer = styled.thead<TableHeadContainerProps>(
  ({ theme, sticky }) => css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};

    ${sticky &&
    css`
      position: sticky;
      top: 0;
    `}

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
