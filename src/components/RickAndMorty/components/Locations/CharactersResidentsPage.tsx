import { useEffect, useState } from 'react';

interface CharactersResidentsPageProps {
  handleAllLocationsPage: () => void;
  characterResidents: Character[];
}

export function CharactersResidentsPage({ characterResidents, handleAllLocationsPage }: CharactersResidentsPageProps) {
  const [dataCharactersResidents, setDataCharactersResidents] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchDataCharactersResidents() {
      const responses = [];
      for (const url of characterResidents) {
        try {
          const response = await fetch(String(url));
          if (response.ok) {
            const responseDataCharactersResidents = await response.json();
            responses.push(responseDataCharactersResidents);
          } else {
            console.error(`Request failure for ${url}: ${response.status}`);
          }
        } catch (error) {
          console.error(`Error in request for ${url}: ${error}`);
        }
      }
      setDataCharactersResidents(responses);
    }

    if (characterResidents) {
      fetchDataCharactersResidents();
    }
  }, [characterResidents]);

  if (!dataCharactersResidents.length) {
    return (
      <>
        <h1>No characters exist in this residence</h1>
        <button className="button-choose-another-residence" onClick={handleAllLocationsPage}>
          Choose another residence
        </button>
      </>
    );
  }

  return (
    <>
      {dataCharactersResidents && (
        <>
          <h2>ALL CHARACTERS IN LOCATION</h2>
          <ul className="character-grid">
            {dataCharactersResidents.map((character: Character) => (
              <li key={character.id} className="character-item">
                <div>
                  <img src={character.image} alt={character.name} />
                  <h3>{character.name}</h3>
                  <button className="button-choose-another-residence" onClick={handleAllLocationsPage}>
                    Choose another residence
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
