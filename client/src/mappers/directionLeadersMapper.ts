import { DirectionLeaderSchema, DirectionLeadersResponse } from '../schema/DirectionLeadersSchema/DirectionLeadersSchema';
import { directionCodeToDirectionType } from './directionMapper';

export function mapDirLeadersResponsetoDirLeaders(
  res: DirectionLeadersResponse,
): DirectionLeaderSchema[] {
  return res.direction_leaders
    .map((dto) => ({
      student: dto.student,
      direction_type: directionCodeToDirectionType[dto.direction_code],
    }));
}
