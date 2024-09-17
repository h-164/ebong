import styled, { keyframes } from "styled-components";
import { max_width } from "@/app/constants";

const profileGap = "20px";


export const VotePageContainer = styled.div`
  width:100%;
  min-height:100vh;
  height:fit-content;
  background-color:#ff97bf;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10vh;

   @media screen and (max-width: ${max_width}) {
    height:100vh;
  }
`

export const TitleContainer = styled.div`
  width:80%;
  height:30vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const TitleFont = styled.div`
  font-size:3rem;
`

export const ResultContainer = styled.div`
  width:100%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:9vh;
`

export const ProfileListContainer = styled.div`
  background-color:#fffbe2;
  min-width:70px;
  padding:3.5vh ${profileGap} 0.5vh ${profileGap};
  width:fit-content;
  height:41vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  position: relative;
  border: #deecef solid 10px;
  gap:1.5vh;
`

export const RankingContainer = styled.div`
  background-color:#deecef;
  width:70px;
  height:70px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
`

const glow = keyframes`
  0% {
    background-color: #ffe177;
    box-shadow: 0 0 5px #ffe177;
  }
  50% {
    background-color: #ffecb5;
    box-shadow: 0 0 20px #ffecb5;
  }
  100% {
    background-color:#ffe177;
    box-shadow: 0 0 5px #ffe177;
  }
`;

export const FirstRankingContainer = styled.div`
  animation: ${glow} 1.5s infinite;
  width:70px;
  height:70px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
`

export const RankingFont = styled.div`
  color:white;
  font-size:2.2rem;
  -webkit-text-stroke: 1px black;
`

export const TieProfileListContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:${profileGap};
`

export const ProfileContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:180px;
  gap:0.5vh;
`

export const ProfileImgContainer = styled.div`
  position: relative;
  width:100px;
  height:120px;
`

export const NameFont = styled.div`
  font-size:1.6rem;
`

export const IntroductionFont = styled.div`
  font-size:1.3rem;
  width:90%;
  text-align:center;
`

export const VoteCountFont = styled.div`
  font-size:1.4rem;
`