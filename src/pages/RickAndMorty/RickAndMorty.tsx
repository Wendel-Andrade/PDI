import EpisodesPage from '@components/RickAndMorty/components/Episodes/EpisodesPage';
import LocationsPage from '@components/RickAndMorty/components/Locations/LocationsPage';
import CharactersPage from '@components/RickAndMorty/components/Characters/CharactersPage';

import { RickAndMortyApiProvider } from '@components/RickAndMorty/context/RickAndMortyApiContext';

import { useRickAndMortyPageControl } from '@components/RickAndMorty/hooks/useRickAndMortyPageControl';

import './index.css';

function RickAndMorty() {
  const {
    selectSearchCharactersPage,
    selectSearchLocationPage,
    selectSearchEpisodesPage,
    searchCharactersPage,
    searchLocationPage,
    searchEpisodesPage,
  } = useRickAndMortyPageControl();

  return (
    <>
      <RickAndMortyApiProvider>
        <div className="section-buttons-switching-pages">
          <button className="button-characters-page" onClick={selectSearchCharactersPage}>
            Characters Page
          </button>

          <button className="button-locations-page" onClick={selectSearchLocationPage}>
            Locations Page
          </button>

          <button className="button-episodes-page" onClick={selectSearchEpisodesPage}>
            Episodes Page
          </button>
        </div>

        {searchCharactersPage && <CharactersPage />}

        {searchLocationPage && <LocationsPage />}

        {searchEpisodesPage && <EpisodesPage />}
      </RickAndMortyApiProvider>
    </>
  );
}

export default RickAndMorty;
