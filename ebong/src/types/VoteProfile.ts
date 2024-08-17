export interface VoteProfile {
    _id: string;
    name:string,
    introduction:string,
    voteCount:number,
    smilingImg:string,
    CryingImg:string,
    link:string
  }
  
  export interface VoteProfilesResponse {
    letters: VoteProfile[];
  }
  
  export interface VoteProfileResponse {
    letter:VoteProfile;
  }