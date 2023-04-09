import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import './search.scss';

type searchValue = { search: string };

export function Search({
  searchCharacters,
}: {
  searchCharacters: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('search') || ''
  );

  const { register, handleSubmit } = useForm<searchValue>();

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    const currentInputValue = event.target.value;
    setInputValue(currentInputValue);
  }

  function handleSubmit1({ search }: { search: string }) {
    localStorage.setItem('search', search);
    setInputValue(search);
    searchCharacters(search);
  }

  return (
    <form
      autoComplete="off"
      className="search"
      onSubmit={handleSubmit(handleSubmit1)}
    >
      <input
        className="search__input"
        type="search"
        placeholder="Search"
        value={inputValue}
        onInput={handleInputValue}
        {...register('search')}
      />

      <input type="submit" value="search" className="search__button" />
    </form>
  );
}
