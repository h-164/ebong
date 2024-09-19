import styled from 'styled-components';


export const ButtonContainer = styled.div<{ disabled?: boolean }>`
  width:80px;
  height:30px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.4rem;
  background-color:#ff97bf;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  color:white;


     @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color:lightgray;
      }

      &:active {
      background-color:gray;
      }
  }
`;
