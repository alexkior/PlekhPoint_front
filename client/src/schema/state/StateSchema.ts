import { ActiveEventsListSchema } from '../ActiveEventsSchema/ActiveEventsSchema';
import { EndedUserEventsSchema } from '../ActiveEventsSchema/EndedUserEventsSchema';
import { EventCardSchema } from '../ActiveEventsSchema/EventCardSchema';
import { EventParticipantsListSchema } from '../ActiveEventsSchema/EventParticipantsSchema';
import { AuthSchema, LogInInfoSchema, RegInfoSchema } from '../AuthShema/AuthSchema';
import { DirectionLeadersListSchema } from '../DirectionLeadersSchema/DirectionLeadersSchema';
import { DirectionsListSchema } from '../DirectionsSchema/DirectionsSchema';
import { StructuresListSchema } from '../StructuresSchema/StructuresSchema';
import { UserInfoSchema } from '../UserSchema/UserShema';
import { StateEntitiesSchema } from './StateEntitiesSchema';

export interface StateSchema {
  auth: Optional<AuthSchema>,
  logInInfo: Optional<LogInInfoSchema>
  regInfo: Optional<RegInfoSchema>
  userInfo: Optional<UserInfoSchema>
  entities: Optional<StateEntitiesSchema>;
  directions: Optional<DirectionsListSchema>;
  structures: Optional<StructuresListSchema>;
  directionLeaders: Optional<DirectionLeadersListSchema>;
  activeEvents: Optional<ActiveEventsListSchema>
  endedUserEvents: Optional<EndedUserEventsSchema>
  event: Optional<EventCardSchema>
  eventParticipants: Optional<EventParticipantsListSchema>
}
