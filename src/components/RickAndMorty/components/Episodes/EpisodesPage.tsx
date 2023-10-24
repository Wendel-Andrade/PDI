import { useRickAndMortyPageControl } from '@components/RickAndMorty/hooks/useRickAndMortyPageControl';
import { SearchEpisodes } from './SearchEpisodes';
import { EpisodesCharactersPage } from './EpisodesCharactersPage';

function EpisodesPage() {
  const {
    showAllEpisodes,
    episodesCharactersPage,
    handleEpisodesCharactersPage,
    handleAllEpisodesPage,
    selectedEpisodesCharacters,
  } = useRickAndMortyPageControl();

  return (
    <>
      {showAllEpisodes && <SearchEpisodes handleEpisodesCharactersPage={handleEpisodesCharactersPage} />}

      {episodesCharactersPage && (
        <EpisodesCharactersPage
          episodeCharacters={selectedEpisodesCharacters}
          handleAllEpisodesPage={handleAllEpisodesPage}
        />
      )}
    </>
  );
}

export default EpisodesPage;
