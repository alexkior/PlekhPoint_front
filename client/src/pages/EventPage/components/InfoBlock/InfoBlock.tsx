import * as React from 'react';
import {
  InfoBlock as StyledInfoBlock,
  InfoRowWrapper,
} from './InfoBlock.style';
import { InfoTitle } from './InfoTitle';
import { InfoText } from './InfoText';
import { InfoTextBlock } from './InfoTextBlock';
import { DirectionType } from '../../../../schema/DirectionsSchema/DirectionsSchema';
import { EventSchema } from '../../../../schema/ActiveEventsSchema/EventSchema';
import { directionTypeToDirectionName } from '../../../../mappers/directionMapper';
import { getDateFormatedString } from '../../../../helpers/getDateFormatedString';

export interface InfoBlockProps {
  event: EventSchema
}

const InfoBlock: React.FC<InfoBlockProps> = function InfoBlock(props) {
  const { event_name, direction_type, event_description, event_date } = props.event;

  return (
    <StyledInfoBlock>
      <InfoTitle>
        Организатор:
      </InfoTitle>
      <InfoText>
        {event_name}
      </InfoText>

      <InfoTitle>
        Направление:
      </InfoTitle>
      <InfoText>
        {directionTypeToDirectionName[direction_type]}
      </InfoText>

      <InfoTitle>
        Дата:
      </InfoTitle>
      <InfoText>
        {getDateFormatedString(event_date)}
      </InfoText>

      <InfoTextBlock event_description={event_description} />
    </StyledInfoBlock>
  );
};

export default InfoBlock;
