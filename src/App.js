import Square from "./Square";
import ButtonTry from "./ButtonTry";
import FlipCard from "./FlipCard";
import CounterFunction from "./Counter";
import Greeting from "./Greeting";

import "./App.css";

function App() {
  return (
    <div className="App">
          <Greeting greeting={{ text: "Hello" }} />
          <ButtonTry value={"Hello World"} />
          <FlipCard name={"Jesus"} value={"3.14"} />
          <CounterFunction />
          <Square />
    </div>
  );
}

export default App;