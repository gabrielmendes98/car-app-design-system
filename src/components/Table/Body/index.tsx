import { ReactNode } from 'react';
import { TableBodyContainer } from './styles';

interface Props {
  children: ReactNode;
}

const TableBody = ({ children }: Props) => (
  <TableBodyContainer>{children}</TableBodyContainer>
);

export default TableBody;
