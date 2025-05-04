import { useState } from "react";
import { Counter } from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  function half() {
    setCount(count / 2);
  }

  function decrease() {
    setCount(count - 1);
  }

  function increase() {
    setCount(count + 1);
  }

  function double() {
    setCount(count * 2);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
    </>
  );
}

export default App;
