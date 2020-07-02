import styled from "styled-components";

import { Search, Close } from "styled-icons/material";

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

  padding: 15px 20px;

  border-radius: 5px;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;

  color: var(--gray);

  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #2f3136;

  margin: 16px 0;
  padding: 1px;

  border-radius: 3px;
  /* border: 1px solid var(--tertiary); */
`;
export const InputSearch = styled.input`
  width: 100%;
  height: 20px;

  padding: 3px 0 3px 5px;

  background: transparent;
  color: var(--white);

  font-size: 14px;
`;
export const IconSearch = styled(Search)`
  width: 22px;
  height: 22px;

  color: var(--gray);
`;
export const ListUsers = styled.div`
  height: 210px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 44px;

  padding: 7px 0 7px 10px;

  border-radius: 3px;

  :hover {
    background-color: var(--quinary);

    > button {
      background-color: rgb(67, 181, 129);
      color: var(--white);
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--mention-detail);
`;
export const NameUser = styled.div`
  margin-left: 8px;

  color: var(--white);
`;
export const ButtonInvite = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 32px;

  color: #43b581;
  background: transparent;

  border: 1px solid;
  border-color: rgba(67, 181, 129, 0.3);
  border-radius: 3px;

  cursor: pointer;
`;
export const CopyLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100px;

  margin-top: 16px;

  > h1 {
    font-size: 12px;
    text-transform: uppercase;

    color: var(--gray);
  }

  > p {
    font-size: 12px;
    display: flex;
    align-items: center;

    width: 100%;

    color: var(--gray);

    > p {
      color: var(--link);

      :hover {
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }
`;
export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px;
  margin: 8px 0;

  background-color: var(--secondary);

  border-radius: 3px;
  border: 1px solid var(--quaternary);

  transition: border-color 0.2s;

  :hover {
    border-color: var(--tertiary);
  }
`;
export const InputCopy = styled.input`
  width: 100%;

  background: transparent;

  padding: 10px;

  font-size: 16px;
  color: var(--white);
`;
export const ButtonCopy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  height: 32px;

  border-radius: 3px;

  background-color: #7289da;

  color: var(--white);
  font-weight: 500;

  cursor: pointer;
`;
