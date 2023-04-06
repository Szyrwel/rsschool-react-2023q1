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
  filterCharacters = '/character?name=',
}

export enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
  inputDate = 'Please, choose date',
  selectCountry = 'Please, choose country',
  inputRadio = 'Please, choose your sex',
  inputFile = 'Please, upload file ',
  inputCheckbox = 'Please, confirm card creation',
  search = 'Please, enter least 4 characters',
}
