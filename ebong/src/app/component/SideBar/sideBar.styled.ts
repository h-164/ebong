import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height:45vh;
  background-color: #fffbe2;
  z-index: 100;
  border-radius:20px;
  border: solid #f684af 7px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  padding:30px 0 20px 0;
`;

export const SideBarBackdrop = styled.div`
  position: fixed;
  z-index:99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
`;

export const SideBarButton = styled.div`
  width:80%;
  height:30%;
  border-radius:20px;
  font-size:1.9rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 10% 0 10%;
  border: solid 2px pink;
  cursor:pointer;

  
@media (hover: hover) and (pointer: fine) {
  &:hover {
    background-color: white;
  }

  &:active {
    background-color: lightgray;
  }
}
`

export const CloseButton = styled.div`
  width:70px;
  height:40px;
  background-color:pink;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.4rem;
  color:white;
  cursor:pointer;

  @media (hover: hover) and (pointer: fine) {
  &:hover {
    background-color:#f684af;
  }

  &:active {
    background-color: lightgray;
  }
}
`