import { Card } from 'pages/forms/interface';
import React, { Component } from 'react';
import './form-card.scss';

type PropsType = {
  card: Card;
};

export class FormCard extends Component<PropsType> {
  state = {
    pathToAvatar: '',
  };

  componentDidMount(): void {
    const { pathToAvatar } = this.props.card;
    const fileReader = new FileReader();

    const getFile = () => {
      if (fileReader.result) {
        const fileStr = fileReader.result;
        if (typeof fileStr === 'string') {
          this.setState({ pathToAvatar: fileStr });
        }
      }
    };

    if (pathToAvatar instanceof File) {
      fileReader.readAsDataURL(pathToAvatar);
      fileReader.addEventListener('loadend', getFile);
    }
  }
  render() {
    const { name, country, sex, date } = this.props.card;
    const { pathToAvatar } = this.state;

    return (
      <div className="card">
        <img src={pathToAvatar} className="card__img" />
        <div className="card__discr">
          <span>
            <b>Name:</b> {name}
          </span>
          <span>
            <b>Country:</b> {country}
          </span>
          <span>
            <b>Sex:</b> {sex}
          </span>
          <span>
            <b>Birthday:</b> {date}
          </span>
        </div>
      </div>
    );
  }
}
