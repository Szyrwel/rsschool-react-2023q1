import { Search } from 'components/search-block/Search';
import React, { Component } from 'react';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <Search />
        <p>This is MainPage</p>
      </div>
    );
  }
}
