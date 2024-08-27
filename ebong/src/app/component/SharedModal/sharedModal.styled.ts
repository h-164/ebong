import styled from 'styled-components';
import { max_width } from '@/app/constants';

//web
const ButtonStyle = "min-width:20%; width:fit-content; height:100%; cursor:pointer; display:flex; justify-content:center; align-items:center; border-radius:10px; background-color:white;"

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33%;
  min-height: 30%;
  height:fit-content;
  background-color: #fffbe2;
  z-index: 100;
  border-radius:20px;
  border: solid #f684af 7px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  padding:30px 0 30px 0;

  @media screen and (max-width: ${max_width}) {
    width:90%;
  }
`;

export const ModalBackdrop = styled.div`
   position: fixed;
   z-index:99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ModalImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 130px;
  overflow: hidden;
`;

export const ModalMessageContainer = styled.div`
  font-size:1.6rem;
  width:90%;
  text-align: center;
`

export const ModalButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5%;
  width:100%;
  height:32px;
`

export const ModalLeftButton =styled.div`
   ${ButtonStyle}

  &:hover {
    background-color:lightgray;
  }

  &:active {
    background-color:gray;
  }
`

export const ModalRightButton =styled.div`
    ${ButtonStyle}

  &:hover {
    background-color:lightgray;
  }

  &:active {
    background-color:gray;
  }
`