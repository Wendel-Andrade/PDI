import { useRickAndMortyDataContext } from '../../context/RickAndMortyApiContext';

interface SearchCharactersProps {
  handleSingleCharactersPage: (character: Character) => void;
}

export function SearchCharacters({ handleSingleCharactersPage }: SearchCharactersProps) {
  const { handleMoreCharacters, searchTextCharacters, setSearchTextCharacters, filteredCharacters } =
    useRickAndMortyDataContext();

  return (
    <>
      <h2>Search Characters</h2>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchTextCharacters}
        onChange={(e) => setSearchTextCharacters(e.target.value)}
        className="input-search-character"
      />
      <button onClick={handleMoreCharacters} className="button-generate-other-characters">
        Generate other characters
      </button>
      <ul className="character-grid">
        {filteredCharacters.map((character: Character) => (
          <li key={character.id} className="character-item">
            <div>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <button className="button-character-information" onClick={() => handleSingleCharactersPage(character)}>
                Character Information
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
