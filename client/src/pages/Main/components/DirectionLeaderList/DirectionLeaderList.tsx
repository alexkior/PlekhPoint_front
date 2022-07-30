import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DirectionLeaderList as StyledDirectionLeaderList, Wrapper } from './DirectionLeaderList.style';
import { DirectionLeader } from './DirectionLeader';
import { getDirectionLeaders } from '../../../../selectors/getDirectionLeaders';
import { directionLeadersService } from '../../../../services/directionLeadersService';
import { LoadingStatus } from '../../../../types/api/api';
import { directionTypeToDirectionName } from '../../../../mappers/directionMapper';
import { Spinner } from '../../../../components/Spinner';

export interface DirectionLeaderListProps {}

const DirectionLeaderList:
  React.FC<DirectionLeaderListProps> = function DirectionLeaderList() {
    const { directionLeadersList, loadingStatus } = useSelector(getDirectionLeaders);
    const dispatch = useDispatch();

    const fetchDirectionLeaders = () => !directionLeadersList?.length
    && dispatch(directionLeadersService(null));

    useEffect(() => {
      fetchDirectionLeaders();
    }, []);

    const renderDirectionLeaders = directionLeadersList
    && directionLeadersList.length
    && loadingStatus === LoadingStatus.READY;

    return (
      <Wrapper>
        {renderDirectionLeaders && (
        <StyledDirectionLeaderList>
          {directionLeadersList.map((directionLeader) => (
            <DirectionLeader
              pictureUrl={directionLeader.student.photo_url}
              name={directionLeader.student.name}
              direction={directionTypeToDirectionName[directionLeader.direction_type]}
            />
          ))}
        </StyledDirectionLeaderList>
        )}
        {loadingStatus === LoadingStatus.LOADING && <Spinner />}
      </Wrapper>
    );
  };

export default DirectionLeaderList;
