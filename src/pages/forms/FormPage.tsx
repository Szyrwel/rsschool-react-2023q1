import { FormCard } from 'components/form-card/FormCard';
import { COUNTRY } from 'constants/constants';
import React, { Component, createRef, FormEventHandler } from 'react';
import { v1 } from 'uuid';
import './form-page.scss';
import { ERROR_MESSAGE, FormType, Card } from './interface';
import {
  validationInputText,
  validationInputDate,
  validationInputRadio,
  validationInputCheckbox,
} from './utilsForValidation';

export class FormPage extends Component {
  state: FormType = {
    errors: {
      formError: true,
      inputTextError: false,
      inputDateError: false,
      selectCountryError: false,
      inputRadioError: false,
      inputFileError: false,
      inputCheckboxError: false,
    },
    cards: [],
  };
  name = 'vmoiemboienbo';
  sex = 'male';
  age = '2020-09-08';
  country = 'Amvidmviodn bnebneirnb';

  inputTextRef = createRef<HTMLInputElement>();
  inputDateRef = createRef<HTMLInputElement>();
  inputSelectRef = createRef<HTMLSelectElement>();
  inputRadioMale = createRef<HTMLInputElement>();
  inputRadioFemale = createRef<HTMLInputElement>();
  inputFile = createRef<HTMLInputElement>();
  inputCheckbox = createRef<HTMLInputElement>();
  cards: Card[] = this.state.cards;

  validationForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const card: Card = {
      name: '',
      country: '',
      pathToAvatar: null,
      date: '',
      sex: '',
    };

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
    const checkboxIsValidated = validationInputCheckbox(
      this.inputCheckbox.current?.checked
    );

    const formIsValidated = [
      textIsValidated,
      dateIsValidated,
      countryIsValidated,
      genderIsValidated,
      avatarIsValidated,
      checkboxIsValidated,
    ].every((el) => !el);
    if (formIsValidated) {
      card.name = this.inputTextRef.current?.value as string;
      card.country = this.inputSelectRef.current?.value as string;
      card.date = this.inputDateRef.current?.value as string;
      if (this.inputFile.current?.files) {
        card.pathToAvatar = this.inputFile.current?.files[0] as File;
      }
      card.sex = this.inputRadioMale.current?.checked ? 'Male' : 'Female';
      this.cards.push(card);
      if (this.inputTextRef.current instanceof HTMLInputElement) {
        this.inputTextRef.current.value = '';
      }
      if (this.inputDateRef.current instanceof HTMLInputElement) {
        this.inputDateRef.current.value = '';
      }
      if (this.inputFile.current instanceof HTMLInputElement) {
        this.inputFile.current.value = '';
      }
      if (this.inputSelectRef.current instanceof HTMLSelectElement) {
        this.inputSelectRef.current.value = '';
      }
      if (this.inputRadioMale.current instanceof HTMLInputElement) {
        this.inputRadioMale.current.checked = false;
      }
      if (this.inputRadioFemale.current instanceof HTMLInputElement) {
        this.inputRadioFemale.current.checked = false;
      }
      if (this.inputCheckbox.current instanceof HTMLInputElement) {
        this.inputCheckbox.current.checked = false;
      }
    }

    this.setState({
      errors: {
        formError: formIsValidated,
        inputTextError: textIsValidated,
        inputDateError: dateIsValidated,
        selectCountryError: countryIsValidated,
        inputRadioError: genderIsValidated,
        inputFileError: avatarIsValidated,
        inputCheckboxError: checkboxIsValidated,
      },
      cards: this.cards,
    });

    console.log(this.state.cards);
  };

  render() {
    const { cards, errors } = this.state;
    const {
      inputTextError,
      inputDateError,
      selectCountryError,
      inputRadioError,
      inputFileError,
      inputCheckboxError,
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
          <div className="input-container">
            <div className="input-container_checkbox">
              <span className="input__title">Create a card</span>
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  ref={this.inputCheckbox}
                />
              </label>
              <div className="checkbox">
                {inputCheckboxError ? (
                  <span className="input__error">
                    {ERROR_MESSAGE.inputCheckbox}
                  </span>
                ) : (
                  <span className="error"></span>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className={'btn__submit'}>
            Create card
          </button>
        </form>
        {this.cards.length > 0 ? (
          <div className="cards">
            {cards.map((card: Card) => (
              <FormCard key={v1()} card={card} />
            ))}
          </div>
        ) : null}
      </>
    );
  }
}
