import mongoose, { Schema } from "mongoose";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const currentUTCDate = () => dayjs().utc().toDate();

export const LetterSchema = new Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  letterContent: {
    type: String,
    required: true,
  },
  isReplied: {
    type: Boolean,
    default: false,
  },
  replyContent: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: currentUTCDate, 
  },
});


export const LETTER = mongoose.models.Letter ?? mongoose.model("Letter", LetterSchema);
