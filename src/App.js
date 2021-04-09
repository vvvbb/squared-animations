import Square from "./component/Square";
import SquareSlide from "./component/SquareSlide";
import SquareFade from "./component/SquareFade";
import FlipCard from "./component/FlipCard";

import "./App.css";

function App() {
  return (
    <div className="App pt-3">
      <SquareSlide name={"I"} />
      <SquareFade name={"They"} />
      <FlipCard name={"We"} />
      <Square name={"I"} />
    </div>
  );
}

export default App;
