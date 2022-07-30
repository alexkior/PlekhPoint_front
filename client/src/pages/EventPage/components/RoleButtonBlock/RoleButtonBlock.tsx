import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RoleButtonBlock as StyledRoleButtonBlock,
  Wrapper,
  RoleButton,
  RoleButtonInput,
  RoleButtonBackground,
} from './RoleButtonBlock.style';
import { RegEventButton } from './components/RegEventButton';
import { BlockTitle } from './components/BlockTitle';
import { EventRole } from '../../../../schema/ActiveEventsSchema/EventSchema';
import { getEventCard } from '../../../../selectors/getEventCard';
import { LoadingStatus } from '../../../../types/api/api';
import { regUserOnEventService } from '../../../../services/regUserOnEventService';

export interface RoleButtonBlockProps {
  radios: EventRole[];
  checked: number;
  eventId: number;
  isStudentRegistered: boolean;
  isEndedEvent: boolean;
  setChecked: (role_code: number) => void;
}

const RoleButtonBlock: React.FC<RoleButtonBlockProps> = function RoleButtonBlock(props) {
  const { radios, checked, isStudentRegistered, isEndedEvent, eventId, setChecked } = props;

  const dispatch = useDispatch();

  const currentRole = React.useMemo(
    () => radios[radios.findIndex(
      (x) => x.role_code === checked,
    )],
    [radios, checked],
  );

  const regUserOnEvent = () => {
    dispatch(regUserOnEventService({
      event_id: eventId,
      role_code: currentRole.role_code,
    }));
  };

  const { registrationStatus, error } = useSelector(getEventCard);

  const isRegistrationInProgress = registrationStatus === LoadingStatus.LOADING;

  const isRegistrationSuccess = registrationStatus === LoadingStatus.READY;

  const isRegistrationError = registrationStatus === LoadingStatus.ERROR;

  const renderRegButton = currentRole || isStudentRegistered;

  const isDisabled = isStudentRegistered
    || isRegistrationInProgress
    || isRegistrationSuccess
    || isEndedEvent;

  return (
    <Wrapper>
      <BlockTitle>
        {
            isStudentRegistered
              ? 'Роли в мероприятии:'
              : 'Выберите свою роль на мероприятии из перечисленных:'
          }
      </BlockTitle>
      <StyledRoleButtonBlock>
        {radios.map(({ role_name, role_code }) => (
          <RoleButtonBackground
            {...props.checked}
          >
            <RoleButton
              htmlFor={role_name}
            >
              <RoleButtonInput
                disabled={isDisabled}
                name={role_name}
                type="radio"
                checked={role_code === checked}
                onChange={() => setChecked(role_code)}
              />
              {role_name}
            </RoleButton>
          </RoleButtonBackground>
        ))}
        {
            renderRegButton
              ? (
                <RegEventButton
                  isDisabled={isDisabled}
                  isLoading={isRegistrationInProgress}
                  isEndedEvent={isEndedEvent}
                  eventRole={currentRole}
                  isStudentRegistered={isStudentRegistered || isRegistrationSuccess}
                  onClick={regUserOnEvent}
                />
              )
              : null
          }
        {isRegistrationError && error ? error : null}
      </StyledRoleButtonBlock>
    </Wrapper>
  );
};

export default RoleButtonBlock;
