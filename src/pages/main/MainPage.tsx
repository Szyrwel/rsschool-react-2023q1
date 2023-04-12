import { Search } from 'components/search-block/Search';
import React, { useEffect, useState } from 'react';
import './main-page.scss';
import { Character } from 'interfaces';
import {
  getAllCharacters,
  getFilteredCharacters,
  getOneCharacter,
} from 'api/Api';
import { BASE_URL } from 'api/constants';
import { Pagination } from 'components/pagination/Pagination';
import { PopUp } from 'components/pop-up/PopUp';

export function MainPage() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search') || ''
  );
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCarrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isFilteredCharacters, setIsFilteredCharacters] = useState(false);
  const [chooseCharacter, setChooseCharacter] = useState<Character | null>(
    null
  );
  const nextPage = (num: number) => setCarrentPage(num + 1);
  const perPage = (num: number) => setCarrentPage(num - 1);

  useEffect(() => {
    if (!isFilteredCharacters) {
      setLoading(true);
      getAllCharacters(BASE_URL, currentPage).then((data) => {
        setCharacters(data);
        setLoading(false);
      });
    }
  }, [currentPage, isFilteredCharacters]);

  useEffect(() => {
    if (!isFilteredCharacters) {
      setLoading(true);
      getFilteredCharacters(BASE_URL, '').then((data) => {
        setLastPage(Math.ceil(data.length / 50));
        setLoading(false);
      });
    }
  }, [isFilteredCharacters]);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      getFilteredCharacters(BASE_URL, searchValue).then((data) => {
        setIsFilteredCharacters(true);
        setLastPage(Math.ceil(data.length / 50));
        setCharacters(data.slice((currentPage - 1) * 50, currentPage * 50));
        setLoading(false);
      });
    }
  }, [currentPage, isFilteredCharacters, searchValue]);

  function searchCharacters(value: string) {
    setCarrentPage(1);
    setSearchValue(value);
  }

  function getIdCharacters(id: number) {
    getOneCharacter(BASE_URL, id).then((data) => {
      setChooseCharacter(data);
    });
  }

  function closeModal() {
    setChooseCharacter(null);
  }

  return (
    <div className="main__container">
      <Search searchCharacters={searchCharacters} />
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        loading={loading}
        characters={characters}
        nextPage={nextPage}
        perPage={perPage}
        getIdCharacters={getIdCharacters}
      />
      {chooseCharacter && (
        <PopUp chooseCharacter={chooseCharacter} closeModal={closeModal} />
      )}
    </div>
  );
}
