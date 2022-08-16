import { ReactNode } from 'react';
import { TableHeadContainer } from './styles';

interface Props {
  children: ReactNode;
}

const TableHead = ({ children }: Props) => (
  <TableHeadContainer>{children}</TableHeadContainer>
);

export default TableHead;
