import React from "react";

import { PopoverWrapper, PopoverTitle } from "./style";

// import "./style.css";

interface Props {
  title?: string;
}

const Popover: React.FC<Props> = ({ title, children }) => {
  return (
    <PopoverWrapper>
      {children}
      <PopoverTitle className="popup"> {title} </PopoverTitle>
    </PopoverWrapper>
  );
};

export default Popover;
