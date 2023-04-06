import { COUNTRY } from 'constants/constants';
import { ERROR_MESSAGE } from 'interfaces';
import { FormField } from 'pages/forms/interface';
import React from 'react';
import { useForm } from 'react-hook-form';

export function Form({
  addCardsToFormCards,
}: {
  addCardsToFormCards: (data: FormField) => void;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormField>({
    defaultValues: {
      name: '',
      date: '',
      country: '',
      pathToAvatar: null,
      sex: '',
      checkbox: false,
    },
  });

  const onSubmit = (data: FormField) => {
    addCardsToFormCards(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="input-container">
        <div>
          <span className="input__title">Name</span>
          {errors.name && (
            <span className="input__error">{ERROR_MESSAGE.inputText}</span>
          )}
        </div>
        <input
          className="input"
          type="text"
          placeholder="Name"
          {...register('name', {
            required: true,
          })}
        />
      </div>
      <div className="input-container">
        <div>
          <span className="input__title">Your birthday</span>
          {errors?.date && (
            <span className="input__error">{ERROR_MESSAGE.inputDate}</span>
          )}
        </div>
        <input
          className="input"
          type="date"
          {...register('date', {
            required: true,
          })}
        />
      </div>
      <div className="input-container">
        <div>
          <span className="input__title">Your country</span>
          {errors?.country && (
            <span className="input__error">{ERROR_MESSAGE.selectCountry}</span>
          )}
        </div>
        <select
          className="select"
          {...register('country', {
            required: true,
          })}
        >
          {COUNTRY.map(({ name, code }) => (
            <option key={code} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <div className="input-file-container">
          <input
            type="file"
            className="input-file"
            id="file"
            {...register('pathToAvatar', {
              required: true,
            })}
          />
          <label className="label-file" htmlFor="file">
            <span className="label-file__icon"></span>
            <span className="label-file__text">Upload image</span>
          </label>
          {errors?.pathToAvatar && (
            <span className="input__error">{ERROR_MESSAGE.inputFile}</span>
          )}
        </div>
      </div>
      <div className="input-container">
        <div>
          <span className="input__title">Your gender</span>
          {errors?.sex && (
            <span className="input__error">{ERROR_MESSAGE.inputRadio}</span>
          )}
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              {...register('sex', {
                required: true,
              })}
              value="Male"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              {...register('sex', {
                required: true,
              })}
              value="Female"
            />
            Female
          </label>
        </div>
      </div>
      <div className="input-container">
        <div className="input-container_checkbox">
          <span className="input__title">Create a card</span>
          <label>
            <input
              type="checkbox"
              {...register('checkbox', {
                required: true,
              })}
            />
          </label>
          <div className="checkbox">
            {errors?.checkbox && (
              <span className="input__error">
                {ERROR_MESSAGE.inputCheckbox}
              </span>
            )}
          </div>
        </div>
      </div>
      <button type="submit" className={'btn__submit'}>
        Create card
      </button>
    </form>
  );
}
