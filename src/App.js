import { GlobalProvider } from './components/projectOne/context/GlobalState';
import { TicTacToe } from './components/projectOne/TicTacToe';
import { GlobalStyle } from './GlobalStyling';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <GlobalStyle />
        <TicTacToe />
      </GlobalProvider>
    </>
  );
};

export default App;
