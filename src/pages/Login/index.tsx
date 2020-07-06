import React from "react";

import { useHistory } from "react-router-dom";

import {
  Container,
  Card,
  Title,
  InputWrapper,
  Label,
  Input,
  SelectWrapper,
  Select,
  Button,
  IsAccount,
  Terms,
} from "./style";

import history from "../../utils/history";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <Container>
      <Card>
        <Title> Criar uma conta </Title>
        <InputWrapper>
          <Label> E-mail </Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label> Nome de usuário </Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label> Senha </Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label> Data de Nascimento </Label>
          <SelectWrapper>
            <Select>
              <option value="0" selected disabled>
                Dia
              </option>
              <option> 01 </option>
              <option> 02 </option>
              <option> 03 </option>
              <option> 04 </option>
              <option> 05 </option>
            </Select>
            <Select>
              <option value="0" selected disabled>
                Mês
              </option>
              <option> Janeiro </option>
              <option> Fevereiro </option>
              <option> Março </option>
              <option> Abril </option>
              <option> Maio </option>
              <option> Junho </option>
            </Select>
            <Select>
              <option value="0" selected disabled>
                Ano
              </option>
              <option> 2020 </option>
              <option> 2019 </option>
              <option> 2018 </option>
              <option> 2017 </option>
              <option> 2016 </option>
              <option> 2015 </option>
            </Select>
          </SelectWrapper>
        </InputWrapper>

        <Button onClick={() => history.push("/home")}> Continuar </Button>
        <IsAccount> Já tem uma conta ? </IsAccount>
        <Terms>
          Ao se registrar, vocẽ concorda com os <span>termos de serviço</span> e
          a <span>política de privacidade</span> do Discord.
        </Terms>
      </Card>
    </Container>
  );
};

export default Login;
