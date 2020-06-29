import React from "react";

import { Container, Separator } from "./style";

import ServerButton from "../ServerButton";

interface Props {}

const ServerList: React.FC<Props> = (props) => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton mentions={2} />
    </Container>
  );
};

export default ServerList;
