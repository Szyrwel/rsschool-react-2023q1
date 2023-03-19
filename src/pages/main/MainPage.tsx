import { Card } from 'components/card/Card';
import { Search } from 'components/search-block/Search';
import { BOOKS_ON_SALE } from 'constants/constants';
import React, { Component } from 'react';
import './main-page.scss';

export class MainPage extends Component {
  render() {
    return (
      <div className="main__container">
        <Search />
        <div className="products">
          {BOOKS_ON_SALE.map((book, index) => (
            <Card key={index} product={book} />
          ))}
        </div>
      </div>
    );
  }
}
