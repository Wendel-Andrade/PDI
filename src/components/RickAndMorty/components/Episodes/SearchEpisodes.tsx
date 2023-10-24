import { useRickAndMortyDataContext } from '@components/RickAndMorty/context/RickAndMortyApiContext';

interface SearchEpisodesProps {
  handleEpisodesCharactersPage: (episodesCharacters: Character[]) => void;
}

export function SearchEpisodes({ handleEpisodesCharactersPage }: SearchEpisodesProps) {
  const { searchTextEpisodes, setSearchTextEpisodes, handleMoreEpisodes, filteredEpisodes } =
    useRickAndMortyDataContext();

  const episodeDataFormat = (dateString: string): string => {
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, dateOptions);
  };

  function formatSeasonEpisode(episodeData: string): string {
    const season = episodeData.slice(1, 3);
    const episode = episodeData.slice(4, 6);

    return `Season ${season} Episode ${episode}`;
  }

  return (
    <>
      <h2>Search Episodes</h2>
      <input
        type="text"
        placeholder="Enter episode name"
        value={searchTextEpisodes}
        onChange={(e) => setSearchTextEpisodes(e.target.value)}
        className="input-search-episode"
      />
      <button onClick={handleMoreEpisodes} className="button-generate-other-episodes">
        Generate other locations
      </button>
      <ul className="episode-grid">
        {filteredEpisodes.map((episode: Episodes) => (
          <li key={episode.id} className="episode-item">
            <div className="episode-section">
              <h3>Name Episode: {episode.name}</h3>
              <span>Episode: {formatSeasonEpisode(episode.episode)}</span>
              <span>Episode Created: {episodeDataFormat(episode.created)}</span>
              <span>Episode Air Date: {episodeDataFormat(episode.air_date)}</span>

              <button
                className="button-location-information"
                onClick={() => handleEpisodesCharactersPage(episode.characters)}
              >
                Characters Episodes
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
