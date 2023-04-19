import { FormCardList } from 'components/form-card-list/FormCardList';
import { Form } from 'components/form/Form';
import { useAppDispatch, useAppSelector } from 'hook';
import React from 'react';
import { addCard, selectCards } from 'store/formSlice';

import './form-page.scss';
import { FormField } from './interface';

export function FormPage() {
  const formCards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  const addCardsToFormCards = (data: FormField) => {
    if (data?.pathToAvatar?.[0]) {
      dispatch(
        addCard({
          ...data,
          pathToAvatar: URL.createObjectURL(data.pathToAvatar?.[0]),
        })
      );
    }
  };

  return (
    <div className="main__container">
      <Form addCardsToFormCards={addCardsToFormCards} />
      {formCards && <FormCardList cards={formCards} />}
    </div>
  );
}
