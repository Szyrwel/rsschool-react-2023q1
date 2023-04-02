import { FormCardList } from 'components/form-card-list/FormCardList';
import { Form } from 'components/form/Form';
import React, { useState } from 'react';
import './form-page.scss';
import { Card, FormField } from './interface';

export function FormPage() {
  const [formCards, setFormCards] = useState<Card[]>([]);

  const addCardsToFormCards = (data: FormField) => {
    if (data?.pathToAvatar?.[0]) {
      setFormCards([
        ...formCards,
        {
          ...data,
          pathToAvatar: URL.createObjectURL(data.pathToAvatar?.[0]),
        },
      ]);
    }
  };

  return (
    <>
      <Form addCardsToFormCards={addCardsToFormCards} />
      {formCards && <FormCardList cards={formCards} />}
    </>
  );
}
