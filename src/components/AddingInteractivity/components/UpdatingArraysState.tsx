import { useState } from 'react';

interface Artist {
  id: number;
  name: string;
}

export function UpdatingArraysState() {
  const [name, setName] = useState<string>('');
  const [artists, setArtists] = useState<Artist[]>([]);

  let nextId = 1;

  const handleAddArtist = () => {
    setArtists([...artists, { id: nextId++, name: name }]);
    setName('');
  };

  const handleClearAll = () => {
    setArtists([]);
    setName('');
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddArtist} style={{ margin: '10px 0' }}>
        Add
      </button>
      <button onClick={handleClearAll}>Clear All</button>
      <ul style={{ margin: '5px 0', padding: '0' }}>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
