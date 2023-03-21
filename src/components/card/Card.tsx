import { Book } from 'interfaces';
import React, { Component } from 'react';
import './card.scss';

type PropsType = {
  product: Book;
};

export class Card extends Component<PropsType> {
  render(): JSX.Element {
    const { author, price, rating, title, urlToImages } = this.props.product;
    return (
      <li className="products__item product">
        <div className="product__link">
          <img
            className="product__image"
            src={urlToImages[0]}
            alt="Book image"
            style={{
              width: '275px',
              height: '340px',
            }}
          />
        </div>
        <div className="product__footer">
          <div className="product__desc">
            <span className="product__title">{title}</span>
            <span className="product__author">{author}</span>
            <span className="product__raiting">{rating}</span>
            <span className="product__price">$ {price.toFixed(2)}</span>
          </div>
        </div>
      </li>
    );
  }
}
