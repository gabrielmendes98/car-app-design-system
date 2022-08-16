import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { TableCellContainer } from './styles';

interface Props extends ComponentPropsWithoutRef<'th'> {
  children?: ReactNode;
  as?: 'td' | 'th';
}

const TableCell = ({ children, as = 'td', ...props }: Props) => (
  <TableCellContainer as={as} {...props}>
    {children}
  </TableCellContainer>
);

export default TableCell;
