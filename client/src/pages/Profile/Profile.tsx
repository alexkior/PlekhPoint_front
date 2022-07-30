import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { DataGrid, GridRowData, GridColumns } from '@material-ui/data-grid';
import { Rating } from '@material-ui/lab';
import {
  Profile as StyledProfile,
  TableWrapper,
} from './Profile.style';
import { ChartBlock } from './components/ChartBlock';
import { DirectionType } from '../../schema/DirectionsSchema/DirectionsSchema';
import { fetchUserEndedEventListService } from '../../services/fetchUserEndedEventListService';
import { getUserEndedEvents } from '../../selectors/getUserEndedEvents';
import { LoadingStatus } from '../../types/api/api';
import { Spinner } from '../../components/Spinner';
import { getDateFormatedString } from '../../helpers/getDateFormatedString';
import { directionTypeToDirectionName } from '../../mappers/directionMapper';

export interface ProfileEventsTableData {
  id: number;
  eventName: string;
  eventDate: string;
  direction: DirectionType;
  structure: string;
  eventRole: string;
  functions: string;
  estimate: number;
  earnedPP: number;
}

const columns: GridColumns = [
  {
    field: 'eventName',
    headerName: 'Мероприятие',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 200,
  },
  {
    field: 'eventDate',
    headerName: 'Дата',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 105,
  },
  {
    field: 'direction',
    headerName: 'Направление',
    headerClassName: 'super-app-theme--header',
    width: 125,
    sortable: false,
    renderCell: (params) => directionTypeToDirectionName[params.value as DirectionType],
  },
  {
    field: 'structure',
    headerName: 'Организатор',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 200,
  },
  {
    field: 'eventRole',
    headerName: 'Роль',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 125,
  },
  {
    field: 'functions',
    headerName: 'Функционал',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 125,
  },
  {
    field: 'estimate',
    headerName: 'Оцени мероприятие',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 125,
    renderCell: (params) => (
      <Rating
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          margin: '0',
        }}
        size="small"
        defaultValue={Number(params.value)}
        precision={0.5}
      />
    ),
  },
  {
    field: 'earnedPP',
    headerName: 'Начислено',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    width: 125,
  },
];

const Profile: React.FC = function Profile(props) {
  const dispatch = useDispatch();

  const { endedUserEventsList, loadingStatus } = useSelector(getUserEndedEvents);

  const rows: GridRowData[] = React.useMemo(() => {
    if (!endedUserEventsList) return [];
    return endedUserEventsList.map(
      (endedEvent): ProfileEventsTableData => ({
        id: endedEvent.event_id,
        eventName: endedEvent.event_name,
        eventDate: getDateFormatedString(endedEvent.event_date),
        direction: endedEvent.direction_type,
        structure: endedEvent.org_name,
        eventRole: endedEvent.student_info?.student_role.role_name || '-',
        functions: 'Редактировать',
        estimate: endedEvent.student_info?.score || 0,
        earnedPP: endedEvent.student_info?.pp_accrued || 0,
      }),
    );
  }, [endedUserEventsList]);

  React.useEffect(() => {
    dispatch(fetchUserEndedEventListService(null));
  }, [dispatch]);

  const renderEndedUserEvents = endedUserEventsList && loadingStatus === LoadingStatus.READY;

  return (
    <StyledProfile>
      <ChartBlock />
      {renderEndedUserEvents && endedUserEventsList && (
        <TableWrapper>
          <Box
            sx={{
              '& .super-app-theme--header': {
                background: '#3a3f76',
                color: '#fff',
              },
            }}
          >
            <DataGrid
              style={{
                borderColor: '#3a3f76',
              }}
              getRowClassName={(params) => `super-app-theme--${params.row.status}`}
              rows={rows}
              columns={columns}
              autoHeight
              hideFooter
              disableColumnFilter
              disableColumnMenu
              disableColumnSelector
              disableDensitySelector
              disableExtendRowFullWidth
              rowHeight={60}
            />
          </Box>
        </TableWrapper>
      )}
      {loadingStatus === LoadingStatus.LOADING && <Spinner />}
    </StyledProfile>
  );
};

export default Profile;
