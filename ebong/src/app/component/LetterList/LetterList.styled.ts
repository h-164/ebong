import styled from 'styled-components';

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
`;

export const LetterContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  background-color: white;
  display: inline-block; /* 컬럼 안에서 정상적으로 표시되도록 설정 */
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  break-inside: avoid; /* 컬럼 사이에서 내용이 잘리지 않게 설정 */
`;

export const RecipientContainer = styled.div`
  font-size:1.7rem;
`

export const ContentContainer = styled.div`
  font-size:1.4rem;
  width:100%;
   word-wrap: break-word;
  word-break: break-all; 
`

export const TimeContainer = styled.div`
  font-size:1.2rem;
`

export const SenderContainer = styled.div`
  font-size:1.7rem;
`