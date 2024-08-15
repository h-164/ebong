export interface Letter {
    _id: string;
    sender:String,
    recipient:String,
    letterContent:String,
    isReplied:Boolean,
    replyContent:String,
    date:String
  }
  
  export interface LettersResponse {
    letters: Letter[];
  }
  
  export interface LetterResponse {
    letter:Letter;
  }