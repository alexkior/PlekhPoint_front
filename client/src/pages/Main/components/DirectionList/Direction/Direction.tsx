import * as React from 'react';
import { Direction as StyledDirection, InnerWrapper, TextsWrapper, IconWrapper } from './Direction.style';
import { Title } from './Title';
import { Text } from './Text';
import { LoadingStatus } from '../../../../../types/api/api';
import { Spinner } from '../../../../../components/Spinner';

export interface DirectionProps {
  name: string;
  status: LoadingStatus;
  icon?: string;
  stats?: string;
}

const Direction: React.FC<DirectionProps> = function Direction(props) {
  const { status, name, icon, stats } = props;

  return (
    <StyledDirection>
      {status === LoadingStatus.LOADING && <Spinner />}
      {status === LoadingStatus.READY && (
      <InnerWrapper>
        <IconWrapper>
          <img
            style={{
              width: '40px',
            }}
            src={icon}
            alt=""
          />
        </IconWrapper>
        <TextsWrapper>
          <Title>{name}</Title>
          <Text>
            Мероприятий на
            <br />
            платформе:&nbsp;
            {stats}
          </Text>
        </TextsWrapper>
      </InnerWrapper>
      )}
    </StyledDirection>
  );
};

export default Direction;
