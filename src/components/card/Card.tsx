import { Character } from 'interfaces';
import React from 'react';
import './card.scss';

export function Card({ character }: { character: Character }) {
  const { name, imageUrl } = character;
  return (
    <li className="character__item character">
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
