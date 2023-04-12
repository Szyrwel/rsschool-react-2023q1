import { FormCard } from 'components/form-card/FormCard';
import { Card } from 'pages/forms/interface';
import React from 'react';
import { v1 } from 'uuid';

export function FormCardList({ cards }: { cards: Card[] }) {
  return (
    <div className="cards">
      {cards.map((card: Card) => (
        <FormCard key={v1()} card={card} />
      ))}
    </div>
  );
}
