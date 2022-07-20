import { useDispatch } from "react-redux";
import { shuffleCards } from "../../features/cards/index";
import { hideOptions } from "../../features/gridOptions/index";
import { images } from "../../features/cards/selectors";
import "../../styles/gridOptions.css";

const GridOptions = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="size-heading">Choose your grid size</h2>
      <div
        data-testid="grid-options-container"
        className="grid-options-container"
      >
        <div
          className="grid-option option-2x2"
          onClick={() => {
            dispatch(shuffleCards(4, 2, images));
            dispatch(hideOptions());
          }}
        >
          2X2
        </div>
        <div
          className="grid-option option-3x2"
          onClick={() => {
            dispatch(shuffleCards(6, 2, images));
            dispatch(hideOptions());
          }}
        >
          3X2
        </div>
        <div
          className="grid-option option-4x2"
          onClick={() => {
            dispatch(shuffleCards(8, 2, images));
            dispatch(hideOptions());
          }}
        >
          4X2
        </div>
        <div
          className="grid-option option-4x3"
          onClick={() => {
            dispatch(shuffleCards(12, 4, images));
            dispatch(hideOptions());
          }}
        >
          4X3
        </div>
      </div>
    </>
  );
};

export default GridOptions;
