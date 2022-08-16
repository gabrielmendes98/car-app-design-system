import { ReactNode } from 'react';
import { TableContainer } from './styles';

interface Props {
  children: ReactNode;
}

const Table = ({ children }: Props) => (
  <TableContainer>{children}</TableContainer>
);

export default Table;
