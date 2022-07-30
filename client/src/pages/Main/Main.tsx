import * as React from 'react';
import { Main as StyledMain } from './Main.style';
import { BlockTitle } from '../../components/BlockTitle';
import { DirectionList } from './components/DirectionList';
import { DirectionLeaderList } from './components/DirectionLeaderList';
import { StructureList } from './components/StructureList';

const Main: React.FC = function Main() {
  return (
    <StyledMain>
      <BlockTitle>
        Активных мероприятий на платформе:
      </BlockTitle>

      <DirectionList />

      <BlockTitle>
        Лидеры направлений:
      </BlockTitle>

      <DirectionLeaderList />

      <BlockTitle>
        Все структуры:
      </BlockTitle>

      <StructureList />
    </StyledMain>
  );
};

export default Main;
