import { useState } from 'react';

interface UpdatePersonDataProps {
  name?: string;
  age?: string;
  profession?: string;
}

export function UpdatePersonData({ name = '', age = '', profession = '' }: UpdatePersonDataProps) {
  const [personData, setPersonData] = useState({
    name,
    age,
    profession,
  });

  const [showData, setShowData] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setShowData(false);
  };

  const handleShowData = () => {
    if (personData.name && personData.age && personData.profession) {
      setShowData(true);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <input type="text" name="name" value={personData.name} onChange={handleInputChange} placeholder="NOME:" />
      <input type="number" name="age" value={personData.age} onChange={handleInputChange} placeholder="IDADE:" />
      <input
        type="text"
        name="profession"
        value={personData.profession}
        onChange={handleInputChange}
        placeholder="PROFISSÂO:"
      />
      <button type="button" onClick={handleShowData}>
        SEND DATA
      </button>
      {showData && (
        <div>
          <p>NOME: {personData.name}</p>
          <p>IDADE: {showData && personData.age}</p>
          <p>PROFISSÃO: {showData && personData.profession}</p>
        </div>
      )}
    </div>
  );
}
