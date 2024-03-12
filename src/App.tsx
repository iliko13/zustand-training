import { useEffect } from "react";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    logCount();
    setCount();
  }, []);

  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={incrementAsync}>+</button>
      <div>hello world {count}</div>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
