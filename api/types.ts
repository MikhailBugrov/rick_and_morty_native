export interface Character {
  character: {
    id: number;
    name: string;
    status: string;
    image: string;
    origin: { name: string };
    location: { id: number; name: string };
    episode: { id: number; name: string; episode: string }[];
  };
}

export interface Location {
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: { id: number; name: string }[];
  };
}

export interface Episode {
  episode: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: { id: number; name: string }[];
  };
}

export interface CharacterList {
  characters: {
    info: {
      pages: number;
    };
    results: {
      id: number;
      name: string;
      status: string;
      image: string;
      location: { name: string };
    }[];
  };
}

export interface LocationList {
  locations: {
    info: {
      pages: number;
    };
    results: {
      id: number;
      name: string;
      type: string;
      dimension: string;
    }[];
  };
}

export interface EpisodeList {
  episodes: {
    info: {
      pages: number;
    };
    results: {
      id: number;
      name: string;
      air_date: string;
      episode: string;
    }[];
  };
}
