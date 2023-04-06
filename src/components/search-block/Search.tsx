import { ERROR_MESSAGE } from 'interfaces';
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
    localStorage.getItem('inputValue') || ''
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<searchValue>();

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    const currentInputValue = event.target.value;
    localStorage.setItem('inputValue', currentInputValue);
    setInputValue(currentInputValue);
  }

  function handleSubmit1({ search }: { search: string }) {
    console.log(search);

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
        {...register('search', {
          required: true,
          minLength: 4,
        })}
      />
      <div>
        <span className="search__error">
          {errors.search && ERROR_MESSAGE.search}
        </span>
      </div>
      <input type="submit" value="search" className="search__button" />
    </form>
  );
}
