import { useState } from 'react';

const numbers: number[] = [0, 1, 2, 3, 4, 5];

export function TransformingAnArray() {
  const [numbersCollection, setNumbersCollection] = useState<number[]>(numbers);

  function handleAddingNumbers() {
    const newNumbersCollection = numbersCollection.map((numbers) => {
      return numbers + 2;
    });

    setNumbersCollection(newNumbersCollection);
  }

  return (
    <>
      <button onClick={handleAddingNumbers}>Generate new numbers</button>

      <ul style={{ margin: '0 ', padding: '0' }}>
        {numbersCollection.map((number) => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    </>
  );
}
