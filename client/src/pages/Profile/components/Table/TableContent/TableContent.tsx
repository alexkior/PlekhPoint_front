import * as React from 'react';
import { TableContent as StyledTableContent, TableContentWrapper } from './TableContent.style';

export interface TableContentProps {
  content?: string | undefined;
}

const TableContent:
  React.FC<TableContentProps> = function TableContent(props) {
    return (
      <TableContentWrapper>
        <StyledTableContent>
          {props.content}
        </StyledTableContent>
      </TableContentWrapper>
    );
  };

export default TableContent;
