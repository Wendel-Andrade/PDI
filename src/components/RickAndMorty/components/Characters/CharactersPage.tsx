import { CharacterInformationPage } from './CharacterInformationPage';
import { SearchCharacters } from './SearchCharacters';

import { useRickAndMortyPageControl } from '../../hooks/useRickAndMortyPageControl';

import '../index.css';

function CharactersPage() {
  const {
    showAllCharacters,
    characterInformationPage,
    handleSingleCharactersPage,
    selectedCharacter,
    handleAllCharactersPage,
  } = useRickAndMortyPageControl();

  return (
    <>
      {showAllCharacters && <SearchCharacters handleSingleCharactersPage={handleSingleCharactersPage} />}

      {characterInformationPage && selectedCharacter !== null && (
        <CharacterInformationPage
          selectedCharacter={selectedCharacter}
          handleAllCharactersPage={handleAllCharactersPage}
        />
      )}
    </>
  );
}

export default CharactersPage;
