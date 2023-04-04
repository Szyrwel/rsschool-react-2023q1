import { Card } from 'components/card/Card';
import { Search } from 'components/search-block/Search';
import React, { useEffect, useState } from 'react';
import './main-page.scss';
import { v1 } from 'uuid';
import { Character } from 'interfaces';
import { getAllCharacters } from 'api/Api';
import { BASE_URL } from 'api/constants';

export function MainPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getAllCharacters(BASE_URL).then((data) => setCharacters(data));
  }, []);

  return (
    <div className="main__container">
      <Search />
      <div className="characters">
        {characters.map((character) => (
          <Card key={v1()} character={character} />
        ))}
      </div>
    </div>
  );
}
