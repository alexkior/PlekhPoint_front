import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { EventRole } from '../../../../../../schema/ActiveEventsSchema/EventSchema';
import { RegEventButton as StyledButton, ButtonText } from './RegEventButton.style';

export interface RegEventButtonProps {
  eventRole: EventRole;
  isStudentRegistered: boolean;
  isEndedEvent: boolean;
  isDisabled: boolean;
  isLoading: boolean
  onClick: () => void
}

const RegEventButton: React.FC<RegEventButtonProps> = function RegEventButton(props) {
  const { eventRole, isStudentRegistered, isDisabled, isLoading, isEndedEvent, onClick } = props;
  return (
    <StyledButton {...props} disabled={isDisabled} onClick={onClick}>
      {isLoading
        ? <Skeleton width="80%" height="80%" />
        : (
          <ButtonText>
            {isStudentRegistered && !isEndedEvent
              ? 'Вы зарегистрированы!'
              : null}
            { !isStudentRegistered && !isEndedEvent && eventRole.role_name
              ? `Зарегистрироваться как ${eventRole.role_name}`
              : null}
            {isEndedEvent ? 'Это мероприятие уже проведено' : null}
          </ButtonText>
        )}
    </StyledButton>
  );
};

export default RegEventButton;
