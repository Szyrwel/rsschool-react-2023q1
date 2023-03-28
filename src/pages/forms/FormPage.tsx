import { COUNTRY } from 'constants/constants';
import React, { Component, createRef, FormEventHandler } from 'react';
import './form-page.scss';
import { ERROR_MESSAGE, FormType } from './interface';
import {
  validationInputText,
  validationInputDate,
  validationInputRadio,
} from './utilsForValidation';

export class FormPage extends Component {
  state: FormType = {
    errors: {
      inputTextError: false,
      inputDateError: false,
      selectCountryError: false,
      inputRadioError: false,
      inputFileError: false,
    },
  };

  inputTextRef = createRef<HTMLInputElement>();
  inputDateRef = createRef<HTMLInputElement>();
  inputSelectRef = createRef<HTMLSelectElement>();
  inputRadioMale = createRef<HTMLInputElement>();
  inputRadioFemale = createRef<HTMLInputElement>();
  inputFile = createRef<HTMLInputElement>();

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
    const genderIsValidated = validationInputRadio(
      this.inputRadioMale.current?.checked,
      this.inputRadioFemale.current?.checked
    );
    const avatarIsValidated = validationInputDate(
      this.inputFile.current?.value
    );

    this.setState({
      errors: {
        inputTextError: textIsValidated,
        inputDateError: dateIsValidated,
        selectCountryError: countryIsValidated,
        inputRadioError: genderIsValidated,
        inputFileError: avatarIsValidated,
      },
    });
  };

  render() {
    const { errors } = this.state;
    const {
      inputTextError,
      inputDateError,
      selectCountryError,
      inputRadioError,
      inputFileError,
    } = errors;

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
          <div className="input-container">
            <div>
              <span className="input__title"></span>
            </div>
            <div
              className="input-file-container"
              style={{
                width: '320px',
              }}
            >
              <input
                type="file"
                name="file"
                className="input-file"
                id="file"
                ref={this.inputFile}
              />
              <label className="label-file" htmlFor="file">
                <span className="label-file__icon"></span>
                <span className="label-file__text">Upload image</span>
              </label>
              {inputFileError ? (
                <span className="input__error">{ERROR_MESSAGE.inputFile}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
          </div>
          <div className="input-container">
            <div>
              <span className="input__title">Your gender</span>
              {inputRadioError ? (
                <span className="input__error">{ERROR_MESSAGE.inputRadio}</span>
              ) : (
                <span className="error"></span>
              )}
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="radio" ref={this.inputRadioMale} />
                Male
              </label>
              <label>
                <input type="radio" name="radio" ref={this.inputRadioFemale} />
                Female
              </label>
            </div>
          </div>
          <button type="submit" className={'btn__submit'}>
            Create card
          </button>
        </form>
      </>
    );
  }
}
