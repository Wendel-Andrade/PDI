import { useEffect, useMemo, useState } from 'react';

export function useRickAndMortyData() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const [moreCharacters, setMoreCharacters] = useState<number>(0);
  const [moreLocations, setMoreLocations] = useState<number>(0);
  const [moreEpisodes, setMoreEpisodes] = useState<number>(0);

  const [searchTextCharacters, setSearchTextCharacters] = useState<string>('');
  const [searchTextLocations, setSearchTextLocations] = useState<string>('');
  const [searchTextEpisodes, setSearchTextEpisodes] = useState<string>('');

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Character[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiBaseURL = 'https://rickandmortyapi.com/api/';
        const charactersEndpoint = `${apiBaseURL}character/?page=${moreCharacters}`;
        const locationsEndpoint = `${apiBaseURL}location/?page=${moreLocations}`;
        const episodesEndpoint = `${apiBaseURL}episode/?page=${moreEpisodes}`;

        const [responseCharacters, responseLocations, responseEpisodes] = await Promise.all([
          fetch(charactersEndpoint),
          fetch(locationsEndpoint),
          fetch(episodesEndpoint),
        ]);

        if (!responseCharacters.ok) {
          throw new Error('Characters not found');
        }

        if (!responseLocations.ok) {
          throw new Error('Locations not found');
        }

        if (!responseEpisodes.ok) {
          throw new Error('Episodes not found');
        }

        const allCharacters = await responseCharacters.json();
        const allLocations = await responseLocations.json();
        const allEpisodes = await responseEpisodes.json();

        setCharacters(allCharacters?.results);
        setLocations(allLocations?.results);
        setEpisodes(allEpisodes?.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [moreCharacters, moreLocations, moreEpisodes]);

  useEffect(() => {
    const filteredCharacters = characters.filter((character: Character) =>
      character.name.toLowerCase().includes(searchTextCharacters.toLowerCase()),
    );
    setFilteredCharacters(filteredCharacters);
  }, [characters, searchTextCharacters]);

  useEffect(() => {
    const filteredLocations = locations.filter((location: Character) =>
      location.name.toLowerCase().includes(searchTextLocations.toLowerCase()),
    );

    setFilteredLocations(filteredLocations);
  }, [locations, searchTextLocations]);

  useEffect(() => {
    const filteredEpisodes = episodes.filter((episode: Character) =>
      episode.name.toLowerCase().includes(searchTextEpisodes.toLowerCase()),
    );

    setFilteredEpisodes(filteredEpisodes);
  }, [episodes, searchTextEpisodes]);

  const handleMoreCharacters = () => {
    const maximumCharactersCollectionAvailable: number = 44;

    if (moreCharacters === maximumCharactersCollectionAvailable) {
      setMoreCharacters(0);
    } else {
      setMoreCharacters(moreCharacters + 1);
    }
  };

  const handleMoreLocations = () => {
    const maximumLocationsCollectionAvailable: number = 7;

    if (moreLocations === maximumLocationsCollectionAvailable) {
      setMoreLocations(0);
    } else {
      setMoreLocations(moreLocations + 1);
    }
  };

  const handleMoreEpisodes = () => {
    const maximumEpisodesCollectionAvailable: number = 4;

    if (moreEpisodes === maximumEpisodesCollectionAvailable) {
      setMoreEpisodes(0);
    } else {
      setMoreEpisodes(moreEpisodes + 1);
    }
  };

  const apiDataMemoized = useMemo(() => {
    return {
      characters,
      locations,
      episodes,
    };
  }, [characters, locations, episodes]);

  return {
    ...apiDataMemoized,
    moreCharacters,
    handleMoreCharacters,
    handleMoreLocations,
    handleMoreEpisodes,
    filteredCharacters,
    filteredLocations,
    filteredEpisodes,
    searchTextCharacters,
    searchTextLocations,
    searchTextEpisodes,
    setSearchTextCharacters,
    setSearchTextLocations,
    setSearchTextEpisodes,
  };
}
