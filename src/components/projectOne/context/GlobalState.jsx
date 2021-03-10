import { createContext, useReducer } from 'react';
import { BoardReducer } from './BoardReducer';

const boardIds = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BoardReducer, boardIds);

  const handleBoardChanges = (boardState, identifier) => {
    dispatch({
      boardState: boardState,
      number: identifier,
    });
  };

  return (
    <GlobalContext.Provider value={{ state: state, handleBoardChanges }}>
      {children}
    </GlobalContext.Provider>
  );
};
