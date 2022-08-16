import { ReactNode } from 'react';
import { TableCellContainer } from './styles';

interface Props {
  children?: ReactNode;
}

const TableCell = ({ children }: Props) => (
  <TableCellContainer>{children}</TableCellContainer>
);

export default TableCell;
