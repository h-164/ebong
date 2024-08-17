import { getLetters, postLetter} from "../../../lib/letter-db";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
  try {
    const data = await getLetters();
    return Response.json({ data });
 
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request:NextRequest){
    try {
        const {sender,
            recipient,
            letterContent} = await request.json();
        const data = await postLetter({sender, recipient,letterContent});
        return Response.json({ data });
    } catch (error:any) {
      console.error(error.response);
      
      return Response.json({ error}, { status: 500 });
    }
}