import styled from 'styled-components';

const mobile_size="766px";
const tablet_min_size="767px"
const tablet_max_size="1025px"
const profileGap = "20px";

export const LetterListPageContainer = styled.div`
  width:100%;
  min-height:100vh;
  height:fit-content;
  background-color:#ff97bf;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TitleContainer = styled.div`
  width:100%;
  height:30vh;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:4rem;
`
export const LetterListContainer = styled.div`
  width: 60%;
  min-height: 70vh;
  height: fit-content;
  background-color: #deecef;
  column-count: 3;
  column-gap: 1rem;
  padding: 10px 10px 10px 10px;

  @media screen and (min-width:  ${tablet_min_size}) and (max-width:  ${tablet_max_size}) {
    width:90%;
  }

  @media screen and (max-width: ${mobile_size}) {
    display:flex;
    flex-direction:column;
    width:80%;
  }
`;

export const LetterContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  background-color: white;
  display: flex;
  flex-direction:column;
  margin-bottom: 1rem;
  box-sizing: border-box;
  break-inside: avoid;
  justify-content: center;
  align-items: center;
  padding:5vh 0 5vh 0;
`;

export const RecipientContainer = styled.div`
  width:70%;
  font-size:1.6rem;
`

export const ContentContainer = styled.div`
  font-size:1.4rem;
  width:70%;
  word-wrap: break-word;
  word-break: break-all;
  padding:1.2vh 0 1.2vh 0;
`

export const DateContainer = styled.div`
  font-size:1.1rem;
  width:70%;
  text-align:right;
`

export const SenderContainer = styled.div`
  width:70%;
  font-size:1.4rem;
  text-align: right;
`

export const ReplyOpenButton = styled.div`
    width: fit-content;
  height: 20px;
  color: #f05a92;
  font-size: 1.3rem;
  cursor: pointer;
  position: relative;
  animation: float 1s ease-in-out infinite;
  padding-top:1vh;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
`

export const ReplyCloseButton = styled.div`
  width:100%;
  height:20px;
  color:#f05a92;
  font-size:1.3rem;
  cursor:pointer;
  text-align:center;
`

export const ReplyContainer = styled.div`
  width:70%;
  height:fit-content;
  padding-top:2vh;
  gap:1vh;
`

export const RecipientProfile = styled.div`
  width:100%;
  font-size:1.4rem;
`

export const ReplyContentContainer = styled.div`
  width:100%;
  font-size:1.3rem;
`