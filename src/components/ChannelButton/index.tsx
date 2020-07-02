import React, { useState } from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./style";

import ModalContactAdd from "../ModalContactAdd";
import Popover from "../Popover";

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div className="actions">
        <Popover title="Criar convite">
          <InviteIcon onClick={handleToggleModal} />
        </Popover>
        <Popover title="Editar canal">
          <SettingsIcon />
        </Popover>
      </div>
      {isOpenModal && <ModalContactAdd onClose={handleToggleModal} />}
    </Container>
  );
};

export default ChannelButton;
