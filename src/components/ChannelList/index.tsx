import React from "react";

import { Container, Category, AddCategoryIcon } from "./style";

import ChannelButton from "../ChannelButton";

interface Props {}

const ChannelList: React.FC<Props> = (props) => {
  return (
    <Container>
      <Category>
        <span> Canal de texto </span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre-#1" />
      <ChannelButton channelName="chat-livre-#2" />
    </Container>
  );
};

export default ChannelList;
