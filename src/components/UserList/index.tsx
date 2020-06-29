import React from "react";

import { Container, Role, User, Avatar } from "./style";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong> {nickname} </strong>

      {isBot && <span> Bot </span>}
    </User>
  );
};

const UserList: React.FC = (props) => {
  return (
    <Container>
      <Role> Disponível - 1 </Role>

      <UserRow nickname="Matheus Paice" />

      <Role> Offline - 1 </Role>

      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
      <UserRow nickname="Daniel Barbosa de Lima" isBot />
    </Container>
  );
};

export default UserList;
