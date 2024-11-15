"use client";

import Image from "next/image";
import { useVoteProfileList, useVote } from "./VoteProfileListHooks";
import { SharedModal } from "../SharedModal/SharedModal";
import { useModal } from "../SharedModal/sharedModal.hooks";
import { isVoted } from "./VoteCookie";
import {
  ProfileListContainer,
  ResultContainer,
  TitleContainer,
  VotePageContainer,
  RankingContainer,
  RankingFont,
  TieProfileListContainer,
  ProfileContainer,
  ProfileImgContainer,
  NameFont,
  IntroductionFont,
  VoteCountFont,
  TitleFont,
  FirstRankingContainer,
  VoteIconContainer,
} from "./VotePage.styled";
import { VoteButton } from "../VoteButton/VoteButton";
import { Header } from "../Header/Header";

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
    <VotePageContainer>
      <TitleContainer>
        <VoteIconContainer>
          <Image
            src="https://drive.google.com/uc?export=view&id=1V2fKuNjgEh88vWhmaGUZQxqSf7BkDpip"
            alt="voteIcon"
            fill
          />
        </VoteIconContainer>
        <TitleFont>인기 투표</TitleFont>
      </TitleContainer>
      <ResultContainer>
        {Object.keys(groupedProfiles).map((rankValue) => (
          <ProfileListContainer key={rankValue}>
            {rankValue === "1" ? (
              <FirstRankingContainer>
                <RankingFont>1등</RankingFont>
              </FirstRankingContainer>
            ) : (
              <RankingContainer>
                <RankingFont>{rankValue}등</RankingFont>
              </RankingContainer>
            )}

            <TieProfileListContainer>
              {groupedProfiles[rankValue].map((profile) => {
                const { _id, smilingImg, name, introduction } = profile;
                const hasVoted = isVoted(_id);

                return (
                  <ProfileContainer key={_id}>
                    <ProfileImgContainer>
                      <Image
                        src={`https://drive.google.com/uc?export=view&id=${smilingImg}`}
                        alt="profileImg"
                        fill
                      />
                    </ProfileImgContainer>
                    <NameFont>{name}</NameFont>
                    <IntroductionFont>{introduction}</IntroductionFont>
                    <VoteButton
                      onClick={() => handleVote(_id)}
                      disabled={hasVoted}
                    >
                      {hasVoted ? "투표 완료" : "투표하기"}
                    </VoteButton>
                  </ProfileContainer>
                );
              })}
            </TieProfileListContainer>
            <VoteCountFont>
              {groupedProfiles[rankValue][0].voteCount}표
            </VoteCountFont>
          </ProfileListContainer>
        ))}
        <SharedModal
          imgUrl="https://drive.google.com/uc?export=view&id=1D-qyvaPjf6spSWOROcRz7jHV3_L0g_SC"
          message={successMessage}
          isModalOpen={isSuccessModalOpen}
          closeModal={closeSuccessModal}
          leftButton={true}
          leftButtonMessage="확인"
        />
        <SharedModal
          imgUrl="https://drive.google.com/uc?export=view&id=1D-qyvaPjf6spSWOROcRz7jHV3_L0g_SC"
          message={errorMessage}
          isModalOpen={isErrorModalOpen}
          closeModal={closeErrorModal}
          leftButton={true}
          leftButtonMessage="확인"
        />
      </ResultContainer>
      <Header />
    </VotePageContainer>
  );
};
