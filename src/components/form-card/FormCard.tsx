import { Card } from 'pages/forms/interface';
import React, { useEffect, useState } from 'react';
import './form-card.scss';

type PropsType = {
  card: Card;
};

export function FormCard(props: PropsType) {
  const { name, country, sex, date } = props.card;
  const [newPathToAvatar, setPathToAvatar] = useState('');

  useEffect(() => {
    const { pathToAvatar } = props.card;
    const fileReader = new FileReader();

    const getFile = () => {
      if (fileReader.result) {
        const fileStr = fileReader.result;
        if (typeof fileStr === 'string') {
          setPathToAvatar(fileStr);
        }
      }
    };

    if (pathToAvatar instanceof File) {
      fileReader.readAsDataURL(pathToAvatar);
      fileReader.addEventListener('loadend', getFile);
    }
  }, [newPathToAvatar, props.card]);

  return (
    <div className="card">
      <img src={newPathToAvatar} className="card__img" />
      <div className="card__discr">
        <span>
          <b>Name:</b> {name}
        </span>
        <span>
          <b>Country:</b> {country}
        </span>
        <span>
          <b>Sex:</b> {sex}
        </span>
        <span>
          <b>Birthday:</b> {date}
        </span>
      </div>
    </div>
  );
}
