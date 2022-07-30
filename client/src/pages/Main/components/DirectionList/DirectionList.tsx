import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DirectionList as StyledDirectionList, Wrapper } from './DirectionList.style';
import { Direction } from './Direction';
import { directionService } from '../../../../services/directionsService';
import { getDirections } from '../../../../selectors/getDirections';
import { LoadingStatus } from '../../../../types/api/api';
import { Spinner } from '../../../../components/Spinner';
import { directionTypeToDirectionName, directionTypeToDirectionIcons } from '../../../../mappers/directionMapper';

const DirectionList: React.FC = function DirectionList() {
  const { directionsList, loadingStatus } = useSelector(getDirections);
  const dispatch = useDispatch();

  const fetchDirections = () => !directionsList?.length && dispatch(directionService(null));

  useEffect(() => {
    fetchDirections();
  }, []);

  const renderDirections = directionsList
    && directionsList.length
    && loadingStatus === LoadingStatus.READY;

  return (
    <Wrapper>
      {renderDirections && (
      <StyledDirectionList>
        {directionsList.map((direction) => (
          <Direction
            key={direction.direction_type}
            status={loadingStatus}
            name={directionTypeToDirectionName[direction.direction_type]}
            icon={directionTypeToDirectionIcons[direction.direction_type]}
            stats={String(direction.events_quantity)}
          />
        ))}
      </StyledDirectionList>
      )}
      {loadingStatus === LoadingStatus.LOADING && <Spinner />}
    </Wrapper>
  );
};

export default DirectionList;
