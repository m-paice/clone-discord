import React from "react";

import { Container, Title, ExpandIcon } from "./style";

interface Props {}

const ServerName: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title> servidor do Paice </Title>

      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
