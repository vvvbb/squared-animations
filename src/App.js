import Square from "./component/Square";
import SquareSlide from "./component/SquareSlide";
import SquareFade from "./component/SquareFade";
import ButtonTry from "./ButtonTry";
import FlipCard from "./component/FlipCard";
import CounterFunction from "./Counter";
import Greeting from "./Greeting";

import "./App.css";

function App() {
  return (
    <div className="App pt-3">
          <SquareSlide name={"I"} />
          <SquareFade name={"They"} />
          <FlipCard name={"We"}/>
          <Square name={"I"} />
          <Greeting greeting={{ text: "Hello" }} />
          <ButtonTry value={"Hello World"} />
          <CounterFunction />
    </div>
  );
}

export default App;