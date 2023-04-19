import { Characters } from 'components/card-list/Characters';
import { Character } from 'interfaces';
import React from 'react';
import './pagination.scss';

type PaginationProps = {
  currentPage: number;
  loading: boolean;
  characters: Character[];
  // nextPage: (num: number) => void;
  // perPage: (num: number) => void;
  getIdCharacters: (id: number) => void;
};

export function Pagination(props: PaginationProps) {
  const symbolPerPage = '<';
  const symbolNextPage = '>';
  const {
    currentPage,
    loading,
    characters,
    // nextPage,
    // perPage,
    getIdCharacters,
  } = props;

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={currentPage === 1}
          // onClick={() => perPage(currentPage)}
        >
          {symbolPerPage}
        </button>
        <button className="pagination__btn">{currentPage}</button>
        <button
          className="pagination__btn"
          // onClick={() => nextPage(currentPage)}
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
