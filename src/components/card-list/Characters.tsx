import { Card } from 'components/card/Card';
import { Character } from 'interfaces';
import React from 'react';
import { v1 } from 'uuid';
import './characters.scss';

export function Characters({
  loading,
  characters,
}: {
  loading: boolean;
  characters: Character[];
}) {
  if (loading)
    return (
      <div className="loading">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
        <h2 className="loading__text">loading...</h2>
      </div>
    );
  return (
    <div className="characters">
      {characters.map((character) => (
        <Card key={v1()} character={character} />
      ))}
    </div>
  );
}
