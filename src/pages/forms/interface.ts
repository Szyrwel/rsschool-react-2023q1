export enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
  inputDate = 'Please, choose date',
  selectCountry = 'Please, choose country',
  inputRadio = 'Please, choose your sex',
  inputFile = 'Please, upload file ',
  inputCheckbox = 'Please, confirm card creation',
}

export type FormField = {
  name: string;
  country: string;
  pathToAvatar: FileList | null;
  date: string;
  sex: string;
  checkbox: boolean;
};

export type Card = {
  name: string;
  country: string;
  pathToAvatar: string;
  date: string;
  sex: string;
  checkbox: boolean;
};
