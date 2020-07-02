import styled from "styled-components";

import { Hashtag, VolumeUp, Check } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 1;
  z-index: 1000;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #36393f;

  width: 440px;
  max-height: 660px;
  min-height: 200px;

  padding: 20px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: var(--gray);
    font-size: 12px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--white);

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const SelectChannel = styled.div`
  margin: 20px 0;

  > h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: var(--gray);
  }
`;

export const BoxItemSelect = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 10px;
  margin: 8px 0px;

  cursor: pointer;
  border-radius: 3px;
  border: 1px solid var(--tertiary);

  background-color: var(--secondary);

  &.selected {
    background-color: rgb(114, 137, 218);
  }

  > p {
    color: var(--white);
    font-size: 16px;

    margin-left: 8px;
  }

  > input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid var(--gray);
    outline: none;
  }

  > input[type="checkbox"]:checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    padding: 5px;
    background-color: var(--white);
    border-radius: 4px;
    border: 1px solid var(--gray);
    outline: none;
    color: black;
    content: url("https://w7.pngwing.com/pngs/654/637/png-transparent-check-mark-computer-icons-checkbox-research-and-development-angle-text-hand.png");
  }
`;

export const HashtagIcon = styled(Hashtag)`
  margin-left: 8px;

  width: 25px;
  height: 25px;

  color: #b9bbbe;
`;

export const VolumeIcon = styled(VolumeUp)`
  margin-left: 8px;

  width: 25px;
  height: 25px;

  color: #b9bbbe;
`;

export const NameChannel = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  > h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: var(--gray);

    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 10px;

  font-size: 16px;
  color: var(--white);
  background-color: var(--secondary);

  border-radius: 3px;
  border: 1px solid var(--tertiary);

  transition: border-color 0.2s;

  :focus {
    border-color: var(--gray);
  }
`;

export const CardFooter = styled.div`
  width: 440px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: #2f3136;
  padding: 20px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Button = styled.button`
  width: 96px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-size: 14px;

  background: transparent;
  border-radius: 3px;

  cursor: pointer;

  &.submit {
    background-color: #7289da;

    :hover {
      text-decoration: none;
      background-color: var(--discord);
    }
  }

  :hover {
    text-decoration: underline;
  }
`;
