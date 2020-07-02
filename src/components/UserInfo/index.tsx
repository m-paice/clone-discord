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

import Popover from "../Popover";

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
        <Popover title="Desativar microfone">
          <MicIcon />
        </Popover>
        <Popover title="Desativar áudio">
          <HeadphoneIcon />
        </Popover>
        <Popover title="Configurações de usuário">
          <SettingsIcon />
        </Popover>
      </Icons>
    </Container>
  );
};

export default UserInfo;
