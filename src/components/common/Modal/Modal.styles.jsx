import styled from "styled-components";

export const Overlay = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalBox = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
