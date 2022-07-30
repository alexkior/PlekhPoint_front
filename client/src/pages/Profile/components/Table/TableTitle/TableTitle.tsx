import * as React from 'react';
import { TableTitle as StyledTableTitle, TableTitleWrapper } from './TableTitle.style';

export interface TableTitleProps {
  title?: string | undefined;
}

const TableTitle:
  React.FC<TableTitleProps> = function TableTitle(props) {
    return (
      <TableTitleWrapper>
        <StyledTableTitle>
          {props.title}
        </StyledTableTitle>
      </TableTitleWrapper>
    );
  };

export default TableTitle;
