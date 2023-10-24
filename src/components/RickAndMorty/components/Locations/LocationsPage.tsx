import { SearchLocations } from './SearchLocations';

import { useRickAndMortyPageControl } from '../../hooks/useRickAndMortyPageControl';

import { CharactersResidentsPage } from './CharactersResidentsPage';

export function LocationsPage() {
  const {
    showAllLocations,
    charactersResidentsPage,
    handleCharactersResidentsPage,
    handleAllLocationsPage,
    selectedCharacterResidents,
  } = useRickAndMortyPageControl();

  return (
    <>
      {showAllLocations && <SearchLocations handleCharactersResidentsPage={handleCharactersResidentsPage} />}

      {charactersResidentsPage && (
        <CharactersResidentsPage
          characterResidents={selectedCharacterResidents}
          handleAllLocationsPage={handleAllLocationsPage}
        />
      )}
    </>
  );
}

export default LocationsPage;
