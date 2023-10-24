import { useState } from 'react';

const initialCounters: number[] = [0, 0, 0];

export function ReplacingItemsArray() {
  const [counters, setCounters] = useState<number[]>(initialCounters);

  function handleIncrementCounter(indexCounters: number) {
    const addCounter = counters.map((counter, index) => {
      if (index === indexCounters) {
        return counter + 1;
      }

      return counter;
    });
    setCounters(addCounter);
  }

  function handleDecrementCounter(indexCounters: number) {
    const decreaseCounter = counters.map((counter, index) => {
      if (index === indexCounters) {
        return counter - 1;
      }

      return counter;
    });

    setCounters(decreaseCounter);
  }

  function resetCounter() {
    setCounters(() => initialCounters);
  }

  return (
    <ul style={{ margin: '0 ', padding: '0' }}>
      {counters.map((counter, index) => (
        <li key={index}>
          {counter}
          <button
            onClick={() => {
              handleIncrementCounter(index);
            }}
            style={{ marginLeft: '10px' }}
          >
            +1
          </button>

          <button
            onClick={() => {
              handleDecrementCounter(index);
            }}
            style={{ marginLeft: '10px' }}
          >
            -1
          </button>
        </li>
      ))}
      <button
        onClick={() => {
          resetCounter();
        }}
        style={{ marginLeft: '10px' }}
      >
        RESET COUNTER
      </button>
    </ul>
  );
}
