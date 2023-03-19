import React, { ChangeEvent, Component } from 'react';
import './search.scss';

type InputValueType = {
  inputValue: string;
};

export class Search extends Component {
  state: InputValueType = {
    inputValue: localStorage.getItem('inputValue') || '',
  };

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('inputValue') || '' });
  }

  componentWillUnmount(): void {
    this.setState({
      inputValue: localStorage.setItem('inputValue', this.state.inputValue),
    });
  }

  handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.state.inputValue}
          onChange={(event) => this.handleInputValue(event)}
        />
      </div>
    );
  }
}
