import { Card } from 'pages/forms/interface';
import React from 'react';
import './form-card.scss';

type PropsType = {
  card: Card;
};

export function FormCard(props: PropsType) {
  const { name, country, pathToAvatar, sex, date } = props.card;

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
