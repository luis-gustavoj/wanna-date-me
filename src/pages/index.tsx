import { Game } from '@components/Game';
import { LovedEmoji } from '@icons';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

import * as S from './App.styles';

type HomeProps = {
  question?: string;
};

const Home: NextPage<HomeProps> = ({ question }) => {
  const [stage, setStage] = useState(0);

  const handleChangeStage = (newStage: number) => {
    setStage(newStage);
  };

  return (
    <S.PageContainer>
      <S.PageInnerContainer>
        {stage === 0 ? (
          question ? (
            <h1>{question}</h1>
          ) : (
            <h1>
              QUER NAMORAR
              <br />
              COMIGO GIOVANNA?
            </h1>
          )
        ) : (
          <h1>
            VOCÊ FEZ A ESCOLHA
            <br />
            CERTA
          </h1>
        )}
        {stage === 0 ? (
          <Game handleChangeStage={handleChangeStage} />
        ) : (
          <S.LovedEmojiContainer>
            <LovedEmoji width="240" height="240" />
          </S.LovedEmojiContainer>
        )}
        <S.Footer>Com amor Luis Silva (Garoto de programa) ❤️</S.Footer>
      </S.PageInnerContainer>
    </S.PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { question } = query;

  return {
    props: {},
  };
  // const newQuestion = String(question) as string;

  // return {
  //   props: {
  //     question: newQuestion?.toUpperCase().replaceAll('-', ' ')),
  //   },
  // };
};

export default Home;
