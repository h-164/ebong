"use client";

import Image from "next/image";
import { useVoteProfileList, useVote } from "./VoteProfileListHooks";
import { SharedModal } from "../SharedModal/SharedModal";
import { useModal } from "../SharedModal/sharedModal.hooks";
import { isVoted } from "./VoteCookie";

interface Profile {
  _id: string;
  smilingImg: string;
  name: string;
  introduction: string;
  voteCount: number;
}

interface GroupedProfiles {
  [rank: string]: Profile[];
}

export const VoteProfileList = () => {
  const { data } = useVoteProfileList();
  const voteProfiles = data?.vote_profiles;

  const {
    isModalOpen: isSuccessModalOpen,
    openModal: openSuccessModal,
    closeModal: closeSuccessModal,
    message: successMessage,
  } = useModal();

  const {
    isModalOpen: isErrorModalOpen,
    openModal: openErrorModal,
    closeModal: closeErrorModal,
    message: errorMessage,
  } = useModal();

  const voteMutation = useVote(openSuccessModal, openErrorModal);

  const handleVote = (_id: string) => {
    voteMutation.mutate(_id);
  };

  let rank = [1, 2, 3, 4, 5, 6, 7];
  voteProfiles?.map((profile, index) => {
    if (index > 0 && profile.voteCount === voteProfiles[index - 1].voteCount) {
      rank[index] = rank[index - 1];
    }
    return null;
  });

  const groupedProfiles: GroupedProfiles = {};

  voteProfiles?.forEach((profile, index) => {
    const rankValue = rank[index].toString();
    if (!groupedProfiles[rankValue]) {
      groupedProfiles[rankValue] = [];
    }
    groupedProfiles[rankValue].push(profile);
  });

  return (
    <>
      {Object.keys(groupedProfiles).map((rankValue) => (
        <div key={rankValue} style={{ display: "flex" }}>
          <div>
            <h1>{rankValue}등</h1>
          </div>
          {groupedProfiles[rankValue].map((profile) => {
            const { _id, smilingImg, name, introduction } = profile;
            const hasVoted = isVoted(_id);

            return (
              <div key={_id}>
                <Image
                  src={smilingImg}
                  alt="profileImg"
                  width={100}
                  height={100}
                />
                <h1>{name}</h1>
                <p>{introduction}</p>
                <button onClick={() => handleVote(_id)} disabled={hasVoted}>
                  {hasVoted ? "투표 완료" : "투표하기"}
                </button>
              </div>
            );
          })}
          <h2>{groupedProfiles[rankValue][0].voteCount}표</h2>
        </div>
      ))}
      <SharedModal
        imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
        message={successMessage}
        isModalOpen={isSuccessModalOpen}
        closeModal={closeSuccessModal}
        leftButton={true}
        leftButtonMessage="확인"
      />
      <SharedModal
        imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
        message={errorMessage}
        isModalOpen={isErrorModalOpen}
        closeModal={closeErrorModal}
        leftButton={true}
        leftButtonMessage="확인"
      />
    </>
  );
};
