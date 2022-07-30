import * as React from 'react';
import { TableTitleRow as StyledTableTitleRow } from './TableTitleRow.style';
import { TableTitle } from '../TableTitle';
import { TableColumn } from '../../../../../types/table/TableColumn';
import { ProfileEventsTableData } from '../../../Profile';

export interface TableTitleRowProps {
  tableColumns: Record<keyof ProfileEventsTableData, TableColumn>,
  hasNumber?: boolean,
}

const TableTitleRow: React.FC<TableTitleRowProps> = function TableTitleRow(props) {
  const { tableColumns, hasNumber } = props;
  return (
    <StyledTableTitleRow>
      {hasNumber && <TableTitle title="№" />}
      {Object.entries(tableColumns).map((entity) => (
        <TableTitle title={entity[1].title} />
      ))}
    </StyledTableTitleRow>
  );
};

export default TableTitleRow;
