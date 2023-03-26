import { COUNTRY } from 'constants/constants';
import React, { Component, FormEventHandler } from 'react';
// import { CardForm } from './CardForm';
import './form-page.scss';
import { ERROR_MESSAGE, ErrorsType, FormFields } from './interface';

export class FormPage extends Component {
  state: ErrorsType = {
    inputText: false,
    inputDate: false,
    selectCountry: false,
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
    const { name, date, country } = form;

    const textIsValidated = this.validationInputText(name.value);
    const dateIsValidated = this.validationInputDate(date.value);
    const countryIsValidated = this.validationInputDate(country.value);

    this.setState({
      inputText: textIsValidated,
      inputDate: dateIsValidated,
      selectCountry: countryIsValidated,
    });
    console.log(this.state);
  };

  render() {
    const { inputText, inputDate, selectCountry } = this.state;

    return (
      <>
        <form className="form" onSubmit={this.validationForm}>
          <div className="input input-container">
            <div>
              <span className="input__title">Name</span>
              {inputText ? (
                <span className="input__error">{ERROR_MESSAGE.inputText}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <input placeholder="Name" type="text" name="name" />
          </div>
          <div className="input input-container">
            <div>
              <span className="input__title">Your birthday</span>
              {inputDate ? (
                <span className="input__error">{ERROR_MESSAGE.inputDate}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <input type="date" name="date" />
          </div>
          <div className="input input-container">
            <div>
              <span className="input__title">Your country</span>
              {selectCountry ? (
                <span className="input__error">
                  {ERROR_MESSAGE.selectCountry}
                </span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <select name="country" className="select">
              {COUNTRY.map(({ name, code }) => (
                <option key={code} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={'btn__submit'}>
            Create card
          </button>
        </form>
      </>
    );
  }
}
