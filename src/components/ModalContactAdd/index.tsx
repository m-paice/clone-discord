import React, { useState } from "react";

import {
  Container,
  Content,
  Card,
  CardTitle,
  Title,
  CloseIcon,
  SearchContainer,
  InputSearch,
  IconSearch,
  ListUsers,
  UserContainer,
  Avatar,
  NameUser,
  ButtonInvite,
  CopyLinkContainer,
  CopyContainer,
  InputCopy,
  ButtonCopy,
} from "./style";

interface Props {
  onClose(): void;
}

const ModalContactAdd: React.FC<Props> = ({ onClose }) => {
  return (
    <Container onClick={onClose}>
      <Content>
        <Card onClick={(e) => e.stopPropagation()}>
          <CardTitle>
            <Title> Convidar amigos para Paice`s server </Title>
            <CloseIcon onClick={onClose} />
          </CardTitle>
          <SearchContainer>
            <InputSearch placeholder="Buscar amigos" />
            <IconSearch />
          </SearchContainer>
          <ListUsers>
            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Daniel Barbosa de Lima </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Bruno Oliveira </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Nilo </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>
            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Daniel Barbosa de Lima </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Bruno Oliveira </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Nilo </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>
            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Daniel Barbosa de Lima </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Bruno Oliveira </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>

            <UserContainer>
              <div>
                <Avatar />
                <NameUser> Nilo </NameUser>
              </div>
              <ButtonInvite> Convidar </ButtonInvite>
            </UserContainer>
          </ListUsers>
          <CopyLinkContainer>
            <h1> ou, envie um link de convite para o servidor a um amigo </h1>
            <CopyContainer>
              <InputCopy value="https://discord.gg/5hRwNe" />
              <ButtonCopy> Copiar </ButtonCopy>
            </CopyContainer>
            <p>
              {" "}
              Seu link de convite expira em 1 dia. &nbsp;{" "}
              <p>Editar link de convite. </p>{" "}
            </p>
          </CopyLinkContainer>
        </Card>
      </Content>
    </Container>
  );
};

export default ModalContactAdd;
