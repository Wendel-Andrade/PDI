import { useCallback, useState } from 'react';

export function useRickAndMortyPageControl() {
  const [searchCharactersPage, setSearchCharactersPage] = useState<boolean>(false);
  const [searchLocationPage, setSearchLocationPage] = useState<boolean>(false);
  const [searchEpisodesPage, setSearchEpisodesPage] = useState<boolean>(false);

  const [showAllCharacters, setShowAllCharacters] = useState<boolean>(true);
  const [characterInformationPage, setCharacterInformationPage] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const [showAllLocations, setShowAllLocations] = useState<boolean>(true);
  const [charactersResidentsPage, setCharactersResidentsPage] = useState<boolean>(false);
  const [selectedCharacterResidents, setSelectedCharacterResidents] = useState<Character[]>([]);

  const [showAllEpisodes, setShowAllEpisodes] = useState<boolean>(true);
  const [episodesCharactersPage, setEpisodesCharactersPage] = useState<boolean>(false);
  const [selectedEpisodesCharacters, setSelectedEpisodesCharacters] = useState<Character[]>([]);

  const handleAllCharactersPage = useCallback(() => {
    setShowAllCharacters(true);
    setCharacterInformationPage(false);
  }, []);

  const handleAllLocationsPage = useCallback(() => {
    setShowAllLocations(true);
    setCharactersResidentsPage(false);
  }, []);

  const handleAllEpisodesPage = useCallback(() => {
    setShowAllEpisodes(true);
    setEpisodesCharactersPage(false);
  }, []);

  const selectSearchCharactersPage = useCallback(() => {
    setSearchEpisodesPage(false);
    setSearchLocationPage(false);
    setSearchCharactersPage(true);
  }, []);

  const selectSearchLocationPage = useCallback(() => {
    setSearchEpisodesPage(false);
    setSearchCharactersPage(false);
    setSearchLocationPage(true);
  }, []);

  const selectSearchEpisodesPage = useCallback(() => {
    setSearchCharactersPage(false);
    setSearchLocationPage(false);
    setSearchEpisodesPage(true);
  }, []);

  const handleSingleCharactersPage = useCallback((character: Character) => {
    setSelectedCharacter(character);
    setCharacterInformationPage(true);
    setShowAllCharacters(false);
  }, []);

  const handleCharactersResidentsPage = useCallback((charactersResidents: Character[]) => {
    setSelectedCharacterResidents(charactersResidents);
    setCharactersResidentsPage(true);
    setShowAllLocations(false);
  }, []);

  const handleEpisodesCharactersPage = useCallback((episodesCharacters: Character[]) => {
    setSelectedEpisodesCharacters(episodesCharacters);
    setEpisodesCharactersPage(true);
    setShowAllEpisodes(false);
  }, []);

  return {
    searchCharactersPage,
    searchLocationPage,
    searchEpisodesPage,
    showAllCharacters,
    showAllLocations,
    showAllEpisodes,
    characterInformationPage,
    charactersResidentsPage,
    episodesCharactersPage,
    selectedCharacter,
    selectSearchCharactersPage,
    selectSearchLocationPage,
    selectSearchEpisodesPage,
    selectedEpisodesCharacters,
    selectedCharacterResidents,
    handleSingleCharactersPage,
    handleEpisodesCharactersPage,
    handleCharactersResidentsPage,
    handleAllCharactersPage,
    handleAllLocationsPage,
    handleAllEpisodesPage,
  };
}
