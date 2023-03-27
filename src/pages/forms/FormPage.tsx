import { COUNTRY } from 'constants/constants';
import React, { Component, createRef, FormEventHandler } from 'react';
import './form-page.scss';
import { ERROR_MESSAGE, FormType } from './interface';
import { validationInputText, validationInputDate } from './utilsForValidation';

export class FormPage extends Component {
  state: FormType = {
    errors: {
      inputTextError: false,
      inputDateError: false,
      selectCountryError: false,
    },
  };
  inputTextRef = createRef<HTMLInputElement>();
  inputDateRef = createRef<HTMLInputElement>();
  inputSelectRef = createRef<HTMLSelectElement>();

  validationForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const textIsValidated = validationInputText(
      this.inputTextRef.current?.value
    );
    const dateIsValidated = validationInputDate(
      this.inputDateRef.current?.value
    );
    const countryIsValidated = validationInputDate(
      this.inputSelectRef.current?.value
    );

    this.setState({
      errors: {
        inputTextError: textIsValidated,
        inputDateError: dateIsValidated,
        selectCountryError: countryIsValidated,
      },
    });
  };

  render() {
    const { errors } = this.state;
    const { inputTextError, inputDateError, selectCountryError } = errors;

    return (
      <>
        <form className="form" onSubmit={this.validationForm}>
          <div className="input-container">
            <div>
              <span className="input__title">Name</span>
              {inputTextError ? (
                <span className="input__error">{ERROR_MESSAGE.inputText}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <input
              ref={this.inputTextRef}
              className="input"
              placeholder="Name"
              type="text"
              name="name"
            />
          </div>
          <div className="input-container">
            <div>
              <span className="input__title">Your birthday</span>
              {inputDateError ? (
                <span className="input__error">{ERROR_MESSAGE.inputDate}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <input
              ref={this.inputDateRef}
              className="input"
              type="date"
              name="date"
            />
          </div>
          <div className="input-container">
            <div>
              <span className="input__title">Your country</span>
              {selectCountryError ? (
                <span className="input__error">
                  {ERROR_MESSAGE.selectCountry}
                </span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <select ref={this.inputSelectRef} name="country" className="select">
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
