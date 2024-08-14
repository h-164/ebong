import mongoose, {Schema} from "mongoose";

export const VOTE_PROFILE_SCHEMA = new Schema({
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
    mongoose.models.VOTE_PROFILE?? mongoose.model("vote_profile", VOTE_PROFILE_SCHEMA);