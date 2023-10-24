import { Suspense } from 'react';
import { useRickAndMortyDataContext } from '../../context/RickAndMortyApiContext';

interface SearchLocationsProps {
  handleCharactersResidentsPage: (charactersResidents: Character[]) => void;
}

export function SearchLocations({ handleCharactersResidentsPage }: SearchLocationsProps) {
  const { searchTextLocations, setSearchTextLocations, handleMoreLocations, filteredLocations } =
    useRickAndMortyDataContext();

  return (
    <>
      <h2>Search Locations</h2>
      <input
        type="text"
        placeholder="Enter location name"
        value={searchTextLocations}
        onChange={(e) => setSearchTextLocations(e.target.value)}
        className="input-search-location"
      />
      <button onClick={handleMoreLocations} className="button-generate-other-locations">
        Generate other locations
      </button>
      <ul className="location-grid">
        <Suspense fallback={<h1>Loading...</h1>}>
          {filteredLocations.map((location: Locations) => (
            <li key={location.id} className="location-item">
              <div className="location-section">
                <h3>Location: {location.name}</h3>
                <span>Dimension: {location.dimension}</span>
                <span>Type: {location.type}</span>
                <button
                  className="button-location-information"
                  onClick={() => handleCharactersResidentsPage(location.residents)}
                >
                  Characters Residents
                </button>
              </div>
            </li>
          ))}
        </Suspense>
      </ul>
    </>
  );
}
