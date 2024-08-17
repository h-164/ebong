import mongoose, {Schema} from "mongoose";

export const LetterSchema = new Schema({
    sender:String,
    recipient:String,
    letterContent:String,
    isReplied:{
        type:Boolean, 
        default:false
    },
    replyContent:{
        type:String,
        default:""},
    date:{
        type:Date,
        default:Date.now
    }
})


export const LETTER = mongoose.models.Letter?? mongoose.model("Letter", LetterSchema);
