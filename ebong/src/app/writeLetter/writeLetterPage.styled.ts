import styled from "styled-components";

//반응형
const max_width = "1025px";

//web
const borderStyle = "solid black 3.5px;"
const upContainerHeight = "22%";
const downContainerHeight = `${100 - Number(upContainerHeight.replace('%', ''))}%`; 
const letterContentTextareaWidth = "70%";
const inputMargin = `${100 - Number(letterContentTextareaWidth.replace('%', ''))}%`; 
const fontSize = "1.4rem";
const nameHeight = "60%";
const nameWidth = "40%";

//mobile
const mobUpContainerHeight = "20%";
const mobDownContainerHeight = `${100 - Number(mobUpContainerHeight.replace('%', ''))}%`; 
const mobBorderStyle = "solid black 2.5px;"
const mobLetterContentTextareaWidth = "90%";
const mobInputMargin =  `${100 - Number(mobLetterContentTextareaWidth.replace('%', ''))}%`; 
const mobNameHeight = "50%";

export const WriteLetterPageConatiner = styled.div`
  width:100%;
  height:150vh;
  background-color:#ff97bf;
  display:flex;
  flex-direction:column;
  align-items:center;

   @media screen and (max-width: ${max_width}) {
    height:100vh;
  }
`;

export const UpContainer = styled.div`
  width:100%;
  height: ${upContainerHeight};

 @media screen and (max-width: ${max_width}) {
    height:${mobUpContainerHeight};
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

  @media screen and (max-width: ${max_width}) {
    height:${mobDownContainerHeight};
    justify-content:center;
  }
`;


export const PostIconContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 30%;
  width: 220px;
  height: 250px;
  z-index: 10;

  @media screen and (max-width: ${max_width}) {
    width:130px;
    height:140px;
    top:6%;
    left:7%;
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
  
  @media screen and (max-width: ${max_width}) {
    height:70%;
    width:90%;
    border:${mobBorderStyle};
  }
`
export const LetterFont = styled.div`
  font-size:2.5rem;

   @media screen and (max-width: ${max_width}) {
    font-size:2.2rem;
  }
`

export const LetterRecipientContainer = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-left:${inputMargin};
  gap:10px;

  @media screen and (max-width: ${max_width}) {
    margin-left:${mobInputMargin};
  }
`

export const LetterSenderContainer = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  margin-right:${inputMargin};
  gap:10px;
  
  @media screen and (max-width: ${max_width}) {
    margin-right:${mobInputMargin};
  }
`

export const LetterContentTextarea = styled.textarea`
  width:${letterContentTextareaWidth};
  height:60%;
  border: ${borderStyle};
  font-size:${fontSize};

   @media screen and (max-width: ${max_width}) {
    border:${mobBorderStyle};
    width:${mobLetterContentTextareaWidth};
    height:70%;
  }
`

export const RecipientSelect = styled.select`
  width:${nameWidth};
  height:${nameHeight};
  border: ${borderStyle};
  font-size:${fontSize};

   @media screen and (max-width: ${max_width}) {
    border:${mobBorderStyle};
    height:${mobNameHeight};
  }
`

export const SenderInput = styled.input`
  width:${nameWidth};
  height:${nameHeight};
  border: ${borderStyle};
  font-size:${fontSize};

   @media screen and (max-width: ${max_width}) {
    border:${mobBorderStyle};
     height:${mobNameHeight};
  }
`

export const PostButtonContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const LetterIconContainer = styled.div`
  position: relative;
  width: 110px;
  height: 90px;
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
  }

  .defaultImage {
    z-index: 1;
    opacity: 1;
  }

  .hoverImage {
    z-index: 2;
    opacity: 0;
  }

  &:hover .defaultImage {
    opacity: 0;
  }

  &:hover .hoverImage {
    opacity: 1;
    transform: scale(0.9);
    transform-origin: center center;
  }
`;

export const PostFont = styled.div`
  font-size:1.3rem;
`