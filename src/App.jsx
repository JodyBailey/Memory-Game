import { useSelector } from "react-redux";
import Board from "./components/board/Board";
import GridOptions from "./components/gridOptions/GridOptions";
import PlayAgainButton from "./components/playAgainButton/PlayAgainButton";
import "./styles/app.css";

function App() {
  const gridOptions = useSelector((state) => {
    return state.gridOptions;
  });

  return (
    <>
      {gridOptions.isDisplayed ? (
        <GridOptions />
      ) : (
        <>
          <Board />
          <PlayAgainButton />
        </>
      )}
    </>
  );
}

export default App;
