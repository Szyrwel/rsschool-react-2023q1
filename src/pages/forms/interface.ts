export type ErrorsType = {
  inputText: boolean;
  inputDate: boolean;
  selectCountry: boolean;
};

export enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
  inputDate = 'Please, choose date',
  selectCountry = 'Please, choose country',
}

export type FormFields = {
  name: HTMLInputElement;
  date: HTMLInputElement;
  country: HTMLInputElement;
};
