import { useState } from 'react';

const initialArray = [
  { id: 0, number: 10 },
  { id: 1, number: 3 },
  { id: 2, number: 25 },
  { id: 3, number: 9 },
  { id: 4, number: 11 },
  { id: 5, number: 0 },
];

export function ChangesArray() {
  const [listNumber, setListNumber] = useState(initialArray);

  const list = [...listNumber];

  const handleReverseList = () => setListNumber(list.reverse());

  const handleFilterList = () => setListNumber((list) => list.filter((listNumbers) => listNumbers.number >= 3));

  const handleSortList = () =>
    setListNumber(list.sort((firstNumber, secondNumber) => firstNumber.number - secondNumber.number));

  return (
    <>
      <div>
        <button onClick={handleReverseList}>Reverse</button>
        <button onClick={handleFilterList}>Filter</button>
        <button onClick={handleSortList}>Sort</button>
      </div>
      <ul>
        {listNumber.map((list) => (
          <li key={list.id}>{list.number}</li>
        ))}
      </ul>
    </>
  );
}
