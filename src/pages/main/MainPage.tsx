import { Card } from 'components/card/Card';
import { Search } from 'components/search-block/Search';
import React, { useEffect, useState } from 'react';
import './main-page.scss';
import { v1 } from 'uuid';
import { Character } from 'interfaces';
import { getAllCharacters, getFilteredCharacters } from 'api/Api';
import { BASE_URL } from 'api/constants';

export function MainPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('inputValue') || ''
  );
  useEffect(() => {
    if (!searchValue) {
      getAllCharacters(BASE_URL).then((data) => setCharacters(data));
    }
  }, [searchValue]);

  useEffect(() => {
    getFilteredCharacters(BASE_URL, searchValue).then((data) => {
      console.log(data);

      setCharacters(data.slice(0, 50));
    });
  }, [searchValue]);

  function searchCharacters(value: string) {
    setSearchValue(value);
  }

  return (
    <div className="main__container">
      <Search searchCharacters={searchCharacters} />
      <div className="characters">
        {characters.length ? (
          characters.map((character) => (
            <Card key={v1()} character={character} />
          ))
        ) : (
          <div>Ничего не найдено</div>
        )}
      </div>
    </div>
  );
}
