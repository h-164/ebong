import styled from "styled-components";

const borderStyle = "solid black 3.5px;"
const upContainerHeight = "22%";
const downContainerHeight = `${100 - Number(upContainerHeight.replace('%', ''))}%`; 
const LetterContentTextareaWidth = "70%";
const InputMargin = `${100 - Number(LetterContentTextareaWidth.replace('%', ''))}%`; 
const WebFontSize = "1.4rem";
const WebNameHeight = "60%";
const WebNameWidth = "40%";

export const WriteLetterPageConatiner = styled.div`
  width:100%;
  height:150vh;
  background-color:#ff97bf;
  display:flex;
  flex-direction:column;
  align-items:center;

   @media screen and (max-width: 768px) {
    height:100vh;
  }
`;

export const UpContainer = styled.div`
  width:100%;
  height: ${upContainerHeight};

 @media screen and (max-width: 768px) {
    height:20%;
  }
`

export const DownConatiner = styled.div`
  position: relative;
  width:100%;
  height:${downContainerHeight};
  background-color:#fffbe2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2%;

  @media screen and (max-width: 768px) {
    height:80%;
  }
`;

export const Letter = styled.div`
  width:45%;
  height:70%;
  background-color:#deecef;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border: ${borderStyle};
  
  @media screen and (max-width: 768px) {
    width:85%;
  }
`
export const LetterFont = styled.div`
  font-size:2.5rem;
`

export const LetterRecipientContainer = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-left:${InputMargin};
  gap:10px;
`

export const LetterSenderContainer = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  margin-right:${InputMargin};
  gap:10px
`

export const LetterContentTextarea = styled.textarea`
  width:${LetterContentTextareaWidth};
  height:60%;
  border: ${borderStyle};
  font-size:${WebFontSize};
`

export const RecipientSelect = styled.select`
  width:${WebNameWidth};
  height:${WebNameHeight};
  border: ${borderStyle};
  font-size:${WebFontSize};
`

export const SenderInput = styled.input`
  width:${WebNameWidth};
  height:${WebNameHeight};
  border: ${borderStyle};
  font-size:${WebFontSize};
`