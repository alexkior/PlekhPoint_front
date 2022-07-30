import { DirectionType } from '../DirectionsSchema/DirectionsSchema';

export interface AboutInfoBlockListSchema {
  aboutInfoBlockList?: AboutInfoBlockSchema[];
}

export interface AboutInfoBlockSchema {
  direction_type: DirectionType;
  infoBlock: InfoBlockSchema
}

export interface InfoBlockSchema {
  title?: string;
  icon?: string;
  text?: string;
  picture?: string;
  align?: boolean;
}
