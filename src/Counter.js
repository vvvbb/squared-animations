import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center pt-5">
      <p>count: {count}</p>
      <button
      onClick={() => setCount(count + 1)}
      className="btn btn-secondary">
        Click
      </button>
    </div>
  );
};

export default Counter;
