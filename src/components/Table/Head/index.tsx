import { memo, ReactNode } from 'react';
import { TableHeadContainer, TableHeadContainerProps } from './styles';

interface Props extends Partial<TableHeadContainerProps> {
  children: ReactNode;
}

const TableHead = ({ children, sticky = false, ...props }: Props) => (
  <TableHeadContainer sticky={sticky} {...props}>
    {children}
  </TableHeadContainer>
);

export default memo(TableHead);
