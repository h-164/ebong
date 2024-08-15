import Image from "next/image";

export default async function Vote() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/vote_profiles`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const profileArray = data.data.vote_profiles;

  return (
    <>
      {profileArray?.map((profile: any) => (
        <>
          <Image
            src={profile.smilingImg}
            alt={"profileImg"}
            width={100}
            height={100}
          ></Image>
          <h1>{profile.name}</h1>
          <p>{profile.introduction}</p>
          <p>{profile.voteCount}</p>
          <button>투표하기</button>
        </>
      ))}
    </>
  );
}
