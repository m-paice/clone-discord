import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./style";

interface Props {}

const UserInfo: React.FC<Props> = (props) => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Matheus Paice</strong>
          <span> #43221 </span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
