import React, { useState } from "react";

import {
  Container,
  Content,
  Card,
  CardTitle,
  Title,
  SelectChannel,
  BoxItemSelect,
  HashtagIcon,
  VolumeIcon,
  NameChannel,
  Input,
  CardFooter,
  Button,
} from "./style";

interface Props {
  onClose(): void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const [state, setState] = useState("text");

  const handleToggleType = (type: string) => {
    if (type === state) return;

    setState(type);
  };

  return (
    <Container onClick={onClose}>
      <Content>
        <Card onClick={(e) => e.stopPropagation()}>
          <CardTitle>
            <Title> Criar canal de {state === "text" ? "texto" : "voz"} </Title>
            <span> em Canais de Texto </span>
          </CardTitle>

          <SelectChannel>
            <h2> Tipo de canal </h2>
            <BoxItemSelect
              onClick={() => handleToggleType("text")}
              className={state === "text" ? "selected" : ""}
            >
              <input
                type="checkbox"
                checked={state === "text" ? true : false}
              />
              <HashtagIcon />
              <p> Canal de texto </p>
            </BoxItemSelect>
            <BoxItemSelect
              onClick={() => handleToggleType("voice")}
              className={state === "voice" ? "selected" : ""}
            >
              <input
                type="checkbox"
                checked={state === "voice" ? true : false}
              />
              <VolumeIcon />
              <p> Canal de voz </p>
            </BoxItemSelect>
          </SelectChannel>

          <NameChannel>
            <h2> Nome do canal </h2>
            <Input />
          </NameChannel>
        </Card>
        <CardFooter>
          <Button onClick={onClose}> Cancelar </Button>
          <Button className="submit" onClick={onClose}>
            {" "}
            Criar canal{" "}
          </Button>
        </CardFooter>
      </Content>
    </Container>
  );
};

export default Modal;
