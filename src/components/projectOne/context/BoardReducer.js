export const BoardReducer = (state, action) => {
  const { number, boardState } = action;

  const play = boardState % 2 === 0 ? 'O' : 'X';

  // prob dont even need a switch statement
  // update state based on action number
  switch (number) {
    case 0:
      return {
        ...state,
        0: play,
      };

    case 1:
      return {
        ...state,
        1: play,
      };

    case 2:
      return {
        ...state,
        2: play,
      };

    case 3:
      return {
        ...state,
        3: play,
      };

    case 4:
      return {
        ...state,
        4: play,
      };

    case 5:
      return {
        ...state,
        5: play,
      };

    case 6:
      return {
        ...state,
        6: play,
      };

    case 7:
      return {
        ...state,
        7: play,
      };

    case 8:
      return {
        ...state,
        8: play,
      };

    default:
  }

  return state;
};
