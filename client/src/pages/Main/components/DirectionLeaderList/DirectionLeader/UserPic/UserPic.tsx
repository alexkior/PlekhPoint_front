import * as React from 'react';
import { UserPic as StyledUserPic } from './UserPic.style';

export interface UserPicProps {
  pic?: string;
}

const UserPic: React.FC<UserPicProps> = function UserPic(props) {
  return (
    <StyledUserPic>
      <img
        style={{
          width: '100px',
        }}
        src={props.pic}
        alt=""
      />
    </StyledUserPic>
  );
};

export default UserPic;
