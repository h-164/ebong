"use client";
import { Header } from "./component/Header/Header";
import Image from "next/image";
import { MainContainer } from "./main.styled";

export default function Home() {
  return (
    <MainContainer>
      <Header></Header>
      <a
        href="https://comic.naver.com/challenge/list?titleId=806769"
        target="_blank"
        rel="noopener noreferrer"
      >
        웹툰 보러가기
      </a>
      <Image
        src="https://drive.google.com/uc?export=view&id=1O31iPe-hB-Ot0e4cgkwQO5b2impEAoT2"
        alt="homeIcon"
        width={700}
        height={330}
      />
    </MainContainer>
  );
}
