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
    vote_profiles: VoteProfile[];
  }
  
  export interface VoteProfileResponse {
    voteProfile:VoteProfile;
  }