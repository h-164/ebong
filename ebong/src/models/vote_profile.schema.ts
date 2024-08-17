import mongoose, {Schema} from "mongoose";

export const VotePRofileSchema = new Schema({
    name:String,
    introduction:String,
    voteCount:{
        type:Number,
        default:0
    },
    smilingImg:String,
    cryingImg:String,
    link:String
})

export const VOTE_PROFILE = 
    mongoose.models.VoteProfile?? mongoose.model("VoteProfile", VotePRofileSchema);