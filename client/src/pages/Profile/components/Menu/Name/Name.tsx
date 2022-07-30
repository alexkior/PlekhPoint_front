import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { Name as StyledName, Wrapper } from './Name.style';

export interface NameProps {
  userFirstName?: string;
  isLoading: boolean;
}

const Name:
  React.FC<NameProps> = function Name(props) {
    const { userFirstName, isLoading } = props;
    return (
      <Wrapper>
        {isLoading
          ? <Skeleton width="80%" height="80%" />
          : (
            <StyledName>
              {userFirstName}
            </StyledName>
          )}
      </Wrapper>
    );
  };

export default Name;
