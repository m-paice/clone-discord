import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./style";

import ChannelMessage, { Mention } from "../ChannelMessage";

interface Props {}

const ChannelData: React.FC<Props> = (props) => {
  return (
    <Container>
      <Messages>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item) => (
            <>
              <ChannelMessage
                author="Matheus Paice"
                content="Olá, tudo bem ?"
                date="29/06/2020"
              />
              <ChannelMessage
                author="Bot"
                hasmention
                content={
                  <>
                    <Mention> @Matheus </Mention>, esta por ai ?
                  </>
                }
                date="29/06/2020"
                isBot
              />
              <ChannelMessage
                author="Matheus Paice"
                content="Olá, tudo bem ?"
                date="29/06/2020"
              />
            </>
          )
        )}
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em char-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
