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
  info: InfoResponseModel;
};
export enum ENDPOINT {
  allCharacters = '/characters',
  filterCharacters = '/character?name=',
  oneCharacter = '/character',
}

type InfoResponseModel = {
  count: number;
  totalPages: number;
  previousPage: string;
  nextPage: string;
};

export enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
  inputDate = 'Please, choose date',
  selectCountry = 'Please, choose country',
  inputRadio = 'Please, choose your sex',
  inputFile = 'Please, upload file ',
  inputCheckbox = 'Please, confirm card creation',
  search = 'Please, enter least 2 characters',
}
