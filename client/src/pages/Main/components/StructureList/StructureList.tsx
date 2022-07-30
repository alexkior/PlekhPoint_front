import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StructureList as StyledStructureList, Wrapper } from './StructureList.style';
import { Structure } from './Structure';
import { getStructures } from '../../../../selectors/getStructures';
import { structuresService } from '../../../../services/structuresService';
import { LoadingStatus } from '../../../../types/api/api';
import { Spinner } from '../../../../components/Spinner';

const StructureList:
  React.FC = function StructureList() {
    const { structuresList, loadingStatus } = useSelector(getStructures);
    const dispatch = useDispatch();

    const fetchStructures = () => !structuresList?.length
    && dispatch(structuresService(null));

    useEffect(() => {
      fetchStructures();
    }, []);

    const renderStructures = structuresList
    && structuresList.length
    && loadingStatus === LoadingStatus.READY;

    return (
      <Wrapper>
        {renderStructures && (
          <StyledStructureList>
            {structuresList.map((structure) => (
              <Structure
                key={structure.id}
                pictureUrl={structure.photo_url}
                name={structure.name}
                stats={String(structure.event_quantity)}
              />
            ))}
          </StyledStructureList>
        )}
        {loadingStatus === LoadingStatus.LOADING && <Spinner />}
      </Wrapper>
    );
  };

export default StructureList;
