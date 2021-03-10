import React, { useState } from 'react';
import styled from 'styled-components';
import { range } from '../../utils/helpers';
import { GridItem } from './GridItem';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  padding: 10px;

  & div {
    border: 1px solid red;
    border-radius: 10px;
    padding: 40px;
  }
`;

export const TicTacToe = () => {
  const [boardState, setBoardState] = useState(1);

  const displayBoard = range(9).map((num) => {
    return <GridItem key={num} identifier={num} boardState={boardState} />;
  });

  return (
    <MainContainer>
      <Board onClick={() => setBoardState(boardState + 1)}>
        {displayBoard}
      </Board>
    </MainContainer>
  );
};

// game recap
// store states in array
