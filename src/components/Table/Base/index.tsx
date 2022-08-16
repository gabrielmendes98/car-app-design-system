import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { TableContainer } from './styles';

interface Props extends ComponentPropsWithoutRef<'table'> {
  children: ReactNode;
}

const Table = ({ children, ...props }: Props) => (
  <TableContainer {...props}>{children}</TableContainer>
);

export default Table;
