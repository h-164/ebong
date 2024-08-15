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
    Link:String
})

export const VOTE_PROFILE = 
    mongoose.models.VoteProfile? mongoose.model("vote_profile", VotePRofileSchema);