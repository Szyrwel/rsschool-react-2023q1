import { Characters } from 'components/card-list/Characters';
import { Character } from 'interfaces';
import React from 'react';
import './pagination.scss';

type PaginationProps = {
  currentPage: number;
  lastPage: number;
  loading: boolean;
  characters: Character[];
  nextPage: (num: number) => void;
  perPage: (num: number) => void;
};

export function Pagination(props: PaginationProps) {
  const symbolperPage = '<';
  const symbolNextPage = '>';
  const { currentPage, lastPage, loading, characters, nextPage, perPage } =
    props;

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          onClick={() => perPage(2)}
        >
          {symbolperPage}
          {symbolperPage}
        </button>
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          onClick={() => perPage(currentPage)}
        >
          {symbolperPage}
        </button>
        <button className="pagination__btn">{currentPage}</button>
        <button
          className="pagination__btn"
          onClick={() => nextPage(currentPage)}
          disabled={currentPage === lastPage}
        >
          {symbolNextPage}
        </button>
        <button
          className="pagination__btn"
          onClick={() => nextPage(lastPage - 1)}
          disabled={currentPage === lastPage}
        >
          {symbolNextPage}
          {symbolNextPage}
        </button>
      </div>
      <Characters loading={loading} characters={characters} />
    </>
  );
}
