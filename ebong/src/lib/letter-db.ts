import { LETTER } from "../models/letter.schema";
import { connectDb } from "./connect-db";

export const getLetters = async () => {
    await connectDb();
    const letters = await LETTER.find().sort({ date: -1 });
    return { letters };
  };

export const postLetter = async ({
        sender,
        recipient,
        letterContent,
    }:{
        sender:string;
        recipient:string;
        letterContent:string;
    })=>{
        await connectDb();
        const letter = new LETTER({sender, recipient, letterContent, date:Date.now()});
        await letter.save();

        return {letter};
    }

export const deleteLetter = async(_id:string)=>{
    await connectDb();
    const {deletedCount} = await LETTER.deleteOne({_id});

    if(deletedCount === 0){
        throw new Error("failed to delete")
    }
}