import React, { ChangeEvent, useState } from 'react';
import './search.scss';

export function Search() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('inputValue') || ''
  );

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    const currentInputValue = event.target.value;
    localStorage.setItem('inputValue', currentInputValue);
    setInputValue(currentInputValue);
  }

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputValue}
      />
    </div>
  );
}
