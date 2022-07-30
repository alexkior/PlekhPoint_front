import * as React from 'react';
import { Table as StyledTable, TableContentRowList } from './Table.style';
import { BlockTitle } from '../BlockTitle';
import { TableTitleRow } from './TableTitleRow';
import { TableContentRow } from './TableContentRow';
import { TableColumn } from '../../../../types/table/TableColumn';
import { ProfileEventsTableData } from '../../Profile';

export interface TableProps {
  title: string;
  hasNumber?: boolean;
  tableColumns: Record<keyof ProfileEventsTableData, TableColumn>,
  tableData: ProfileEventsTableData[]
}

const Table: React.FC<TableProps> = function Table(props) {
  const { title, hasNumber, tableColumns, tableData } = props;
  return (
    <StyledTable>
      <BlockTitle>{title}</BlockTitle>
      {tableData.length
        ? (
          <>
            <TableTitleRow tableColumns={tableColumns} hasNumber={hasNumber} />
            <TableContentRowList>
              {tableData.map((rowData, index) => (
                <TableContentRow
                  rowData={rowData}
                  tableColumns={tableColumns}
                  hasNumber={hasNumber}
                  number={index + 1}
                />
              ))}
            </TableContentRowList>
          </>
        )
        : 'Данные отсутствуют'}
    </StyledTable>
  );
};

export default Table;
