import { Characters } from 'components/card-list/Characters';
import { useAppDispatch, useAppSelector } from 'hook';
import { Character } from 'interfaces';
import React from 'react';
import {
  fetchCharacters,
  lastPage,
  nextPage,
  perPage,
  startPage,
} from 'store/searchValueSlice';
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
  const { currentPage, totalPages } = useAppSelector((state) => state.search);

  function goToNextPage() {
    dispatch(nextPage());
    dispatch(fetchCharacters());
  }

  function goToPrevPage() {
    dispatch(perPage());
    dispatch(fetchCharacters());
  }

  function goToStartPage() {
    dispatch(startPage());
    dispatch(fetchCharacters());
  }

  function goToLastPage() {
    dispatch(lastPage());
    dispatch(fetchCharacters());
  }

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          onClick={() => goToStartPage()}
        >
          {symbolPerPage}
          {symbolPerPage}
        </button>
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          onClick={() => goToPrevPage()}
        >
          {symbolPerPage}
        </button>
        <button className="pagination__btn">{currentPage}</button>
        <button
          className="pagination__btn"
          onClick={() => goToNextPage()}
          disabled={currentPage === totalPages}
        >
          {symbolNextPage}
        </button>
        <button
          className="pagination__btn"
          onClick={() => goToLastPage()}
          disabled={currentPage === totalPages}
        >
          {symbolNextPage}
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
