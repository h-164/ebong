import {VOTE_PROFILE} from "../models/vote_profile.schema";
import {connectDb} from "./connect-db";

export const getVoteProfiles = async ()=>{
    await connectDb();
    const vote_profiles = await VOTE_PROFILE.find();

    return {vote_profiles};
}

export const updateVoteProfiles = async ({
    _id
  }: {
    _id: string;
  }) => {
    await connectDb();

    const { matchedCount, modifiedCount } = await VOTE_PROFILE.updateOne(
      { _id }, 
      { $inc: { voteCount: 1 } } 
    );

    if (matchedCount === 0) {
      throw new Error("No document found");
    }


    if (modifiedCount === 0) {
      throw new Error("No document updated");
    }
  };