import { Search } from 'components/search-block/Search';
import React, { useEffect, useState } from 'react';
import './main-page.scss';
import { Character } from 'interfaces';
import { getOneCharacter } from 'api/Api';
import { BASE_URL } from 'api/constants';
import { Pagination } from 'components/pagination/Pagination';
import { PopUp } from 'components/pop-up/PopUp';
import { fetchCharacters, handleSearchValue } from 'store/searchValueSlice';
import { useAppDispatch, useAppSelector } from 'hook';

export function MainPage() {
  const dispatch = useAppDispatch();
  const { characters, loading, currentPage } = useAppSelector(
    (state) => state.search
  );

  const [chooseCharacter, setChooseCharacter] = useState<Character | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isFilteredCharacters && searchValue) {
  //     setLoading(true);
  //     getFilteredCharacters(BASE_URL, '').then((data) => {
  //       setLastPage(Math.ceil(data.length / 50));
  //       setLoading(false);
  //     });
  //   }
  // }, [isFilteredCharacters, searchValue]);

  // useEffect(() => {
  //   if (searchValue) {
  //     setLoading(true);
  //     getFilteredCharacters(BASE_URL, searchValue).then((data) => {
  //       setIsFilteredCharacters(true);
  //       setLastPage(Math.ceil(data.length / 50));
  //       setCharacters(data.slice((currentPage - 1) * 50, currentPage * 50));
  //       setLoading(false);
  //     });
  //   }
  // }, [currentPage, isFilteredCharacters, searchValue]);

  function searchCharacters(value: string) {
    dispatch(handleSearchValue(value));
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
        loading={loading}
        characters={characters}
        getIdCharacters={getIdCharacters}
      />
      {chooseCharacter && (
        <PopUp chooseCharacter={chooseCharacter} closeModal={closeModal} />
      )}
    </div>
  );
}
