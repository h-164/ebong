"use client";

import { clientApi } from "@/lib/client-api/letters";
import { FormEvent } from "react";
import { useContext } from "react";
import { LetterContext } from "@/provider/letter-provider";

export default function WriteLetter() {
  const { writeLetter } = useContext(LetterContext);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const senderElement = formElement.namedItem("sender") as HTMLInputElement;
    const recipientElement = formElement.namedItem(
      "recipient"
    ) as HTMLTextAreaElement;
    const letterContentElement = formElement.namedItem(
      "letterContent"
    ) as HTMLTextAreaElement;

    const sender = senderElement?.value;
    const recipient = recipientElement?.value;
    const letterContent = letterContentElement?.value;

    try {
      clientApi.postLetters(sender, recipient, letterContent);
      await writeLetter({ sender, recipient, letterContent });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={onSubmit}>
        <span>sender</span>
        <input type="text" name="sender" id="sender" />
        <span>Recipient</span>
        <input type="text" name="recipient" id="recipient" />
        <span>Letter Content</span>
        <textarea
          name="letterContent"
          id="letterContent"
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
