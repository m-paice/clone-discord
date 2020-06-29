import React from "react";

import { Container, Avatar, Message, Header, Content } from "./style";
export { Mention } from "./style";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasmention?: boolean;
  isBot?: boolean;
}

const ServerName: React.FC<Props> = ({
  author,
  date,
  content,
  hasmention,
  isBot,
}) => {
  return (
    <Container className={hasmention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} />

      <Message>
        <Header>
          <strong> {author} </strong>
          {isBot && <span> Bot </span>}
          <time> {date} </time>
        </Header>
        <Content> {content} </Content>
      </Message>
    </Container>
  );
};

export default ServerName;
