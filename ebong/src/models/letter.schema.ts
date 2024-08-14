import mongoose, {Schema} from "mongoose";

export const LETTER_SCHEMA = new Schema({
    sender:String,
    recipient:String,
    letterContent:String,
    isReplied:{
        type:Boolean, 
        default:false
    },
    replyContent:String,
    date:{
        type:Date,
        default:Date.now
    }
})

export const LETTER = 
    mongoose.models.LETTER?? mongoose.model("Letter", LETTER_SCHEMA);