import { Character } from 'interfaces';
import React from 'react';
import './card.scss';

type PropsType = {
  character: Character;
};

export function Card(props: PropsType) {
  const { name, imageUrl } = props.character;
  return (
    <li className="character__item character">
      <div className="character__link">
        <img
          className="character__image"
          src={imageUrl}
          alt={`character name - ${name}`}
        />
        <span className="character__title">{name}</span>
      </div>
    </li>
  );
}
