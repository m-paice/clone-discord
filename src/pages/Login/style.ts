import styled from "styled-components";

import { ArrowDropDown } from "styled-icons/material";

interface PropsSelect {
  width?: number | string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("../../assets/discord-logo.png");
`;

export const Card = styled.div`
  width: 480px;

  padding: 32px;

  background-color: var(--primary);

  border-radius: 6px;
`;
export const Title = styled.div`
  width: 100%;

  text-align: center;

  font-weight: 600;
  font-size: 24px;
  color: var(--white);

  margin-bottom: 16px;
`;
export const InputWrapper = styled.div`
  width: 100%;
`;
export const Label = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;

  color: var(--gray);

  margin-bottom: 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 10px;
  margin-bottom: 16px;

  font-size: 16px;
  color: var(--white);
  background-color: var(--secondary);

  border-radius: 3px;
  border: 1px solid;
  border-color: var(--tertiary);

  transition: border-color 0.2s;

  :focus {
    border-color: var(--discord);
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100px;
  height: 42px;

  padding: 10px;
  margin-bottom: 16px;

  background-color: var(--secondary);

  border-radius: 3px;
  border: 1px solid;
  border-color: var(--tertiary);

  color: var(--gray);

  transition: border-color 0.2s;

  cursor: pointer;

  :focus {
    border-color: var(--discord);
  }

  :nth-child(2) {
    width: 160px;
  }

  :hover {
    > svg {
      color: var(--white);
    }
  }
`;
export const IconBottom = styled(ArrowDropDown)`
  width: 24px;
  height: 24px;

  color: var(--gray);

  transition: color 0.2s;
`;
export const Button = styled.button`
  color: var(--white);
  background-color: var(--discord);

  width: 100%;
  height: 44px;

  font-size: 16px;

  border-radius: 3px;

  margin-bottom: 8px;

  cursor: pointer;
`;
export const IsAccount = styled.span`
  width: 100%;

  color: var(--discord);
  font-size: 12px;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
export const Terms = styled.div`
  margin-top: 16px;

  font-size: 11px;

  color: var(--gray);

  > span {
    color: var(--discord);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
