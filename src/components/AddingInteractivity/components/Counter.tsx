import { useState } from 'react';

interface CounterState {
  count: number;
}

export function Counter() {
  const [counter, setCounter] = useState<CounterState>({ count: 0 });

  const increment = () => {
    setCounter((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  const decrement = () => {
    setCounter((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  const reset = () => {
    setCounter((prevState) => ({
      count: (prevState.count = 0),
    }));
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: '400px', margin: '0 auto', gap: '8px' }}>
        <span>Count: {counter.count}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
