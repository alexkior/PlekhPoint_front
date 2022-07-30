import * as React from 'react';
import Rating from '@material-ui/lab/Rating';
import { TableContentRow as StyledTableContentRow } from './TableContentRow.style';
import { TableContent } from '../TableContent';
import { ProfileEventsTableData } from '../../../Profile';
import { TableColumn } from '../../../../../types/table/TableColumn';
import { TableCellType } from '../../../../../types/table/TableCellType';
import { directionTypeToDirectionName } from '../../../../../mappers/directionMapper';
import { DirectionType } from '../../../../../schema/DirectionsSchema/DirectionsSchema';

export interface TableContentRowProps {
  hasNumber?: boolean;
  number?: number;
  tableColumns: Record<keyof ProfileEventsTableData, TableColumn>;
  rowData: ProfileEventsTableData
}

const TableContentRow: React.FC<TableContentRowProps> = function TableContentRow(props) {
  const { hasNumber, number, tableColumns, rowData } = props;

  return (
    <StyledTableContentRow>
      {hasNumber && number && <TableContent content={String(number)} />}
      {Object.entries(rowData).map((cellEntry) => {
        const columnKey = cellEntry[0] as keyof ProfileEventsTableData;
        const { cellType } = tableColumns[columnKey];
        const cellData = cellType === TableCellType.DIRECTION
          ? directionTypeToDirectionName[cellEntry[1] as DirectionType]
          : cellEntry[1];

        if (cellType === TableCellType.RATING) {
          return (
            <Rating
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                margin: '0',
              }}
              size="small"
              defaultValue={cellData}
              precision={0.5}
            />
          );
        }

        return <TableContent content={cellData} />;
      })}
    </StyledTableContentRow>
  );
};

export default TableContentRow;
