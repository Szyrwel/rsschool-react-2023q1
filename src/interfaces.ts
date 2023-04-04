export interface Book {
  title: string;
  author: string;
  price: number;
  urlToImages: string[];
  rating: number;
}

export interface Country {
  name: string;
  code: string;
}

export interface Character {
  _id: number;
  url: string;
  name: string;
  imageUrl: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  alignment: string;
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
}

export type ResponseModel = {
  data: Character[];
  count: number;
  totalPages: number;
  nextPage: string;
};
export enum ENDPOINT {
  allCharacters = '/characters',
}
