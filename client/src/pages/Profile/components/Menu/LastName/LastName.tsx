import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { LastName as StyledLastName, Wrapper } from './LastName.style';

export interface LastNameProps {
  userLastName?: string;
  isLoading: boolean;
}

const LastName:
  React.FC<LastNameProps> = function LastName(props) {
    const { userLastName, isLoading } = props;
    return (

      <Wrapper>

        {isLoading
          ? <Skeleton width="80%" height="80%" />
          : (
            <StyledLastName>
              {userLastName}
            </StyledLastName>
          )}

      </Wrapper>
    );
  };

export default LastName;
