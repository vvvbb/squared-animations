import Square from "./Square";
import ButtonTry from "./ButtonTry";
import FlipCard from "./FlipCard";
import CounterFunction from "./Counter";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <ButtonTry value={"Hello World"}/>
      <div className="my-5 border border-warning"></div>
      <FlipCard name={"Jesus"} value={"3.14"} />
      <div className="my-5 border border-warning"></div>
      <CounterFunction/>
      <div className="my-5 border border-warning"></div>
      <Square />
    </div>
  );
}

export default App;
