import { memo, ReactNode } from 'react';
import { TableRowContainer } from './styles';

interface Props {
  children: ReactNode;
}

const TableRow = ({ children }: Props) => (
  <TableRowContainer>{children}</TableRowContainer>
);

export default memo(TableRow);
