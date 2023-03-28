export type FormType = {
  errors: {
    formError: boolean;
    inputTextError: boolean;
    inputDateError: boolean;
    selectCountryError: boolean;
    inputRadioError: boolean;
    inputFileError: boolean;
    inputCheckboxError: boolean;
  };
  cards: Card[] | [];
};

export enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
  inputDate = 'Please, choose date',
  selectCountry = 'Please, choose country',
  inputRadio = 'Please, choose your sex',
  inputFile = 'Please, upload file ',
  inputCheckbox = 'Please, confirm card creation',
}

export type Card = {
  name: string;
  country: string;
  pathToAvatar: string;
  date: string;
  sex: string;
};
