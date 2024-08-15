"use client";

import { FormEvent } from "react";

export default function WriteLetter() {
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sender, recipient, letterContent }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
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
