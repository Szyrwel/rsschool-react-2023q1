import { Card } from 'components/card/Card';
import { Search } from 'components/search-block/Search';
import { BOOKS_ON_SALE } from 'constants/constants';
import React from 'react';
import './main-page.scss';
import { v1 } from 'uuid';

export function MainPage() {
  return (
    <div className="main__container">
      <Search />
      <div className="products">
        {BOOKS_ON_SALE.map((book) => (
          <Card key={v1()} product={book} />
        ))}
      </div>
    </div>
  );
}
