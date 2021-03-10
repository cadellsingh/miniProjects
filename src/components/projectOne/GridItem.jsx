import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from './context/GlobalState';

const Turn = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* :hover {
    cursor: ${(props: TurnProps) => (props.disabled ? 'default' : 'pointer')};
    background-color: green;
  } */

  & p {
    font-size: 50px;
  }
`;

export const GridItem = ({ identifier, boardState }) => {
  const { state, handleBoardChanges } = useContext(GlobalContext);
  console.log(state);
  //   let playMade;
  //   let alreadyPlayed = false;
  //   for (const [key, value] of Object.entries())
  return (
    <Turn>
      <p>tst</p>
    </Turn>
  );
};
