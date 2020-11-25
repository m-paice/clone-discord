import React from "react";

import AnchorLogo from "../../assets/anchor.svg";

import { Button } from "./style";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? "active" : ""}
      id="btn-webchat"
    >
      {isHome && <img src={AnchorLogo} alt="Logo" />}
    </Button>
  );
};

export default ServerButton;
