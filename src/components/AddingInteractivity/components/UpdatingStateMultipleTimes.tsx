import { useState } from 'react';

export function UpdatingStateMultipleTimes() {
  const [number, setNumber] = useState<number>(0);

  return (
    <div>
      <h3 style={{ margin: '0' }}>{number}</h3>
      <button
        onClick={() => {
          setNumber((number) => number + 1);
          setNumber((number) => number + 1);
          setNumber((number) => number + 1);
        }}
        style={{ marginBottom: '10px' }}
      >
        +3
      </button>
    </div>
  );
}
