import { Button } from '@components/Button';
import { LoveEmoji, SadEmoji } from '@icons';
import { useRef } from 'react';

import * as S from './Game.styles';

type GameProps = {
  handleChangeStage: (stage: number) => void;
};

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const Game = ({ handleChangeStage }: GameProps) => {
  const declineButtonRef = useRef<HTMLButtonElement>(null);

  const generatePosition = () => {
    const x = getRndInteger(0, 95);
    const y = getRndInteger(0, 95);
    return { x, y };
  };

  const handleMouseOver = () => {
    const position = generatePosition();

    if (position && declineButtonRef.current) {
      declineButtonRef.current.style.position = 'absolute';
      declineButtonRef.current.style.top = `${position.y}%`;
      declineButtonRef.current.style.left = `${position.x}%`;
    }
  };

  return (
    <S.GameContainer>
      <Button onClick={() => handleChangeStage(1)}>
        Sim
        <LoveEmoji />
      </Button>
      <Button ref={declineButtonRef} onMouseEnter={() => handleMouseOver()}>
        Não
        <SadEmoji />
      </Button>
    </S.GameContainer>
  );
};
