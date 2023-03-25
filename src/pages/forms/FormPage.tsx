import React, { Component, createRef, MouseEvent } from 'react';
import './form-page.scss';

type StateTypes = {
  onSubmit: boolean;
  inputText: string;
  errors: ErrorsType;
};

type ErrorsType = {
  inputText: boolean;
};

enum ERROR_MESSAGE {
  inputText = 'Please, enter your name',
}

export class FormPage extends Component {
  state: StateTypes = {
    onSubmit: false,
    inputText: '',
    errors: {
      inputText: false,
    },
  };

  inputTextRef: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  handleChange = (): void => {
    this.setState({
      inputText: this.inputTextRef.current?.value,
    });
  };

  validationInputText = (e: MouseEvent, value: string) => {
    e.preventDefault();
    this.setState({ onSubmit: true });
    console.log(this.state.inputText);

    if (value.length === 0) {
      this.setState({ errors: { inputText: true } });
    } else {
      this.setState({ errors: { inputText: false } });
    }
  };

  // createCard = () => {};

  render() {
    const { onSubmit, errors, inputText } = this.state;

    return (
      <form className="form">
        <label className="label">
          <p>Name</p>
          <input
            ref={this.inputTextRef}
            placeholder="Name"
            type="text"
            value={inputText}
            onChange={this.handleChange}
          />
        </label>
        {onSubmit && errors.inputText ? (
          <div className="error">{ERROR_MESSAGE.inputText}</div>
        ) : (
          <div className="error"></div>
        )}
        <button
          className="btn__submit"
          onClick={(e) => this.validationInputText(e, inputText)}
        >
          Create card
        </button>
      </form>
    );
  }
}
