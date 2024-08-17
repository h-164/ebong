import { Letter } from "@/types/Letter";

export default async function WriteList() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const lettersArray = data.data.letters;

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
}
