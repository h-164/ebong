import { getVoteProfiles, updateVoteProfiles} from "../../../lib/vote_profile-db";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
  try {
    const data = await getVoteProfiles();
    return Response.json({ data });
 
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest){
    try {
        const {_id} = await request.json();
        const data = await updateVoteProfiles(_id);
        return Response.json({ data });
    } catch (error:any) {
      console.error(error.response);
      
      return Response.json({ error}, { status: 500 });
    }
  }
