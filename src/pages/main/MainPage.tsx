import { Search } from 'components/search-block/Search';
import React, { useEffect, useState } from 'react';
import './main-page.scss';
import { Character } from 'interfaces';
import { getAllCharacters, getFilteredCharacters } from 'api/Api';
import { BASE_URL } from 'api/constants';
import { Pagination } from 'components/pagination/Pagination';

export function MainPage() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('inputValue') || ''
  );
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCarrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isFilteredCharacters, setIsFilteredCharacters] = useState(false);
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
      getFilteredCharacters(BASE_URL, '').then((data) => {
        setLastPage(Math.ceil(data.length / 50));
      });
    }
  }, [isFilteredCharacters]);

  useEffect(() => {
    searchValue &&
      getFilteredCharacters(BASE_URL, searchValue).then((data) => {
        setIsFilteredCharacters(true);
        console.log(data);
        setLastPage(Math.ceil(data.length / 50));
        setCharacters(data.slice((currentPage - 1) * 50, currentPage * 50));
      });
  }, [currentPage, isFilteredCharacters, searchValue]);

  function searchCharacters(value: string) {
    setCarrentPage(1);
    setSearchValue(value);
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
      />
    </div>
  );
}
