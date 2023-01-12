import { ComponentPropsWithoutRef, memo, ReactNode } from 'react';
import { TableCellContainer } from './styles';

interface Props extends ComponentPropsWithoutRef<'th'> {
  children?: ReactNode;
  as?: 'td' | 'th';
}

const TableCell = ({
  children,
  as = 'td',
  align = 'left',
  ...props
}: Props) => (
  <TableCellContainer as={as} align={align} {...props}>
    {children}
  </TableCellContainer>
);

export default memo(TableCell);
