import { useEffect, useState } from 'react';

interface EpisodesCharactersPageProps {
  handleAllEpisodesPage: () => void;
  episodeCharacters: Character[];
}

export function EpisodesCharactersPage({ episodeCharacters, handleAllEpisodesPage }: EpisodesCharactersPageProps) {
  const [dataEpisodeCharacters, setDataEpisodeCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchDataEpisodeCharacters() {
      const responses = [];
      for (const url of episodeCharacters) {
        try {
          const response = await fetch(String(url));
          if (response.ok) {
            const responseDataEpisodeCharacters = await response.json();
            responses.push(responseDataEpisodeCharacters);
          } else {
            console.error(`Request failure for ${url}: ${response.status}`);
          }
        } catch (error) {
          console.error(`Error in request for ${url}: ${error}`);
        }
      }
      setDataEpisodeCharacters(responses);
    }

    if (episodeCharacters) {
      fetchDataEpisodeCharacters();
    }
  }, [episodeCharacters]);

  return (
    <>
      <h2>ALL CHARACTERS IN EPISODE:</h2>
      {dataEpisodeCharacters && (
        <ul className="character-grid">
          {dataEpisodeCharacters.map((character: Character) => (
            <li key={character.id} className="character-item">
              <div>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <button className="button-choose-another-episode" onClick={handleAllEpisodesPage}>
                  Choose another episode
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
