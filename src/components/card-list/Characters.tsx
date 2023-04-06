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
  if (loading) return <h2 className="loading">LOADING...</h2>;
  return (
    <div className="characters">
      {characters.map((character) => (
        <Card key={v1()} character={character} />
      ))}
    </div>
  );
}
