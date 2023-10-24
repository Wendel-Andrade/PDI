import { useState } from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
}

export function UpdatingObjectsInsideArrays() {
  const [persons, setPersons] = useState<Person[]>([]);

  const generateRandomPerson = (): Person => {
    const randomId = Math.floor(Math.random() * 1000);
    const randomAge = Math.floor(Math.random() * 50) + 18;
    const names = ['Wendel', 'Jorge', 'Ana', 'João', 'Alex', 'Mike', 'Alice'];
    const randomName = names[Math.floor(Math.random() * names.length)];

    return { id: randomId, name: randomName, age: randomAge };
  };

  const addRandomPerson = () => {
    const newPerson: Person = generateRandomPerson();
    setPersons([...persons, newPerson]);
  };

  const removeLastPerson = () => {
    const updatedPersons = [...persons];
    updatedPersons.pop();
    setPersons(updatedPersons);
  };

  return (
    <div>
      <button onClick={addRandomPerson}>Add Random Person</button>
      <button onClick={removeLastPerson}>Remove Last Person</button>
      {persons.map((person) => (
        <div key={person.id}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
}
