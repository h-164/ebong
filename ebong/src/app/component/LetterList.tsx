import { Letter } from "@/types/Letter";
import { clientApi } from "@/lib/client-api/letters";

export const LetterList = async () => {
  const response = await clientApi.getLetters();
  const lettersArray = response.letters;
  return (
    <>
      {lettersArray?.map((letter: Letter) => (
        <>
          <h3>to.{letter.recipient}</h3>
          <p>{letter.letterContent}</p>
          <p>{letter.date}</p>
          <h3>from.{letter.sender}</h3>
          {letter.isReplied && (
            <>
              <p>
                ↳{letter.recipient}:{letter.replyContent}
              </p>
            </>
          )}
        </>
      ))}
    </>
  );
};
