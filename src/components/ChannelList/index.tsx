import React, { useState } from "react";

import { Container, Category, AddCategoryIcon } from "./style";

import ChannelButton from "../ChannelButton";
import Modal from "../Modal";
import Popover from "../Popover";

interface Props {}

const ChannelList: React.FC<Props> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggloModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <Category>
        <span> Canal de texto </span>

        <Popover title="Criar canal">
          <AddCategoryIcon onClick={handleToggloModal} />
        </Popover>
      </Category>

      <ChannelButton channelName="chat-livre-#1" />
      <ChannelButton channelName="chat-livre-#2" />

      {isOpenModal && <Modal onClose={handleToggloModal} />}
    </Container>
  );
};

export default ChannelList;
