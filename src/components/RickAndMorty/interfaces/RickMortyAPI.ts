interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface MainCharacterData {
  info: Info;
  results: Character[];
}

interface ManipulationCharacters {
  handleMoreCharacters: () => void;
  searchTextCharacters: string;
  filteredCharacters: Character[];
  setSearchTextCharacters: React.Dispatch<React.SetStateAction<string>>;
}

interface Locations {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: Character[];
  type: string;
  url: string;
}

interface Episodes {
  air_date: string;
  characters: any;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}
