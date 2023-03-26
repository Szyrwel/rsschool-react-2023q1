import React, { Component, FormEventHandler } from 'react';
import './form-page.scss';
import { ERROR_MESSAGE, ErrorsType } from './interface';

type FormFields = {
  name: HTMLInputElement;
  date: HTMLInputElement;
};

export class FormPage extends Component {
  state: ErrorsType = {
    inputText: false,
    inputDate: false,
  };

  validationInputText = (value: string) => {
    return !(value && value.length !== 0);
  };

  validationInputDate = (value: string) => {
    return !value;
  };

  validationForm: FormEventHandler<HTMLFormElement & FormFields> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, date } = form;

    const textIsValidated = this.validationInputText(name.value);
    const dateIsValidated = this.validationInputDate(date.value);
    console.log(textIsValidated);
    console.log(dateIsValidated);

    this.setState({
      inputText: textIsValidated,
      inputDate: dateIsValidated,
    });
    console.log(this.state);
  };

  render() {
    const { inputText, inputDate } = this.state;

    return (
      <form className="form" onSubmit={this.validationForm}>
        <label className="label">
          <p>Name</p>
          <input placeholder="Name" type="text" name="name" />
        </label>
        {inputText ? (
          <div className="error">{ERROR_MESSAGE.inputText}</div>
        ) : (
          <div className="error"></div>
        )}
        <label className="label">
          <p>Your birthday</p>
          <input type="date" name="date" />
        </label>
        {inputDate ? (
          <div className="error">{ERROR_MESSAGE.inputDate}</div>
        ) : (
          <div className="error"></div>
        )}
        <button type="submit" className={'btn__submit'}>
          Create card
        </button>
      </form>
    );
  }
}
