import styled from "styled-components";

export const PopoverWrapper = styled.div`
  display: block;
  position: relative;

  :hover {
    > div.popup {
      visibility: visible;
      opacity: 1;
      z-index: 1000;
    }
  }
`;

export const PopoverTitle = styled.div`
  display: flex;
  align-items: center;
  top: -35px;
  padding: 5px;
  background-color: #000;
  color: var(--white);
  border-radius: 8px;
  position: absolute;
  white-space: nowrap;
  font-size: 12px;
  border-radius: 3px;
  width: auto;
  height: 30px;
  opacity: 0;
  visibility: hidden;
  /* -webkit-transition: all 500ms;
  transition: all 500ms; */

  /* ::before {
    position: absolute;
    z-index: -1;
    content: "";
    right: calc(50% - 10px);
    top: 28px;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-color: #000 transparent transparent transparent;
    transition-duration: 0.3s;
    transition-property: transform;
  } */
`;
