import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from './context/GlobalState';

const Turn = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    background-color: lightblue;
  }

  & p {
    font-size: 50px;
  }
`;

export const GridItem = ({ identifier, boardState }) => {
  const { state, handleBoardChanges } = useContext(GlobalContext);

  let playMade;
  let alreadyPlayed = false;
  for (const [key, value] of Object.entries(state)) {
    if (parseInt(key) === identifier) {
      playMade = value;
      alreadyPlayed = value === '' ? false : true;
    }
  }

  return (
    <Turn
      disabled={alreadyPlayed}
      onClick={() =>
        alreadyPlayed ? null : handleBoardChanges(boardState, identifier)
      }
    >
      <p>{playMade}</p>
    </Turn>
  );
};
