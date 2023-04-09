import { Character } from 'interfaces';
import React from 'react';
import './card.scss';

export function Card({
  character,
  getIdCharacters,
}: {
  character: Character;
  getIdCharacters: (id: number) => void;
}) {
  const { name, imageUrl, _id } = character;
  return (
    <li
      className="character__item character"
      onClick={() => getIdCharacters(_id)}
    >
      <div className="character__link">
        <img
          className="character__image"
          src={imageUrl ?? './images/rss.jpg'}
          alt={`character name - ${name}`}
        />
        <span className="character__title">{name}</span>
      </div>
    </li>
  );
}
