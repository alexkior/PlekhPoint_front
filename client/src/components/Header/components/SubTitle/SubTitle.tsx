import * as React from 'react';

import { SubTitle as StyledSubTitle } from './SubTitle.style';

export interface SubTitleProps {
  height?: string;
}

const SubTitle: React.FC<SubTitleProps> = function SubTitle(props) {
  return (
    <StyledSubTitle {...props} />
  );
};

export default SubTitle;
