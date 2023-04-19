import { Characters } from 'components/card-list/Characters';
import { useAppDispatch, useAppSelector } from 'hook';
import { Character } from 'interfaces';
import React from 'react';
import { fetchCharacters, nextPage, perPage } from 'store/searchValueSlice';
import './pagination.scss';

type PaginationProps = {
  loading: boolean;
  currentPage: number;
  characters: Character[];
  getIdCharacters: (id: number) => void;
};

export function Pagination(props: PaginationProps) {
  const symbolPerPage = '<';
  const symbolNextPage = '>';
  const { loading, characters, getIdCharacters } = props;
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.search);

  function changePageUp() {
    dispatch(nextPage());
    dispatch(fetchCharacters());
  }

  function changePageDown() {
    dispatch(perPage());
    dispatch(fetchCharacters());
  }

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          onClick={() => changePageDown()}
        >
          {symbolPerPage}
        </button>
        <button className="pagination__btn">{currentPage}</button>
        <button
          className="pagination__btn"
          onClick={() => changePageUp()}

          // disabled={currentPage === lastPage}
        >
          {symbolNextPage}
        </button>
      </div>
      <Characters
        loading={loading}
        characters={characters}
        getIdCharacters={getIdCharacters}
      />
      {!characters.length ? (
        <div className="about">Sorry, characters not found...</div>
      ) : null}
    </>
  );
}
