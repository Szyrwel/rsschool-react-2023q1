import { Character } from 'interfaces';
import React from 'react';
import styles from './popUp.module.scss';

export function PopUp({
  chooseCharacter,
  closeModal,
}: {
  chooseCharacter: Character;
  closeModal: () => void;
}) {
  const {
    name,
    imageUrl,
    films,
    shortFilms,
    tvShows,
    videoGames,
    alignment,
    parkAttractions,
    allies,
    enemies,
  } = chooseCharacter;

  const arrToString = (arr: string[]) => arr.map((el) => `"${el}"`).join(', ');

  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={styles.popup__close} onClick={closeModal}>
          <span className={styles.popup__close_line}>X</span>
        </div>
        <div className={styles.popup__content}>
          <div className={styles.title}>
            <img src={imageUrl} />
            <h2>{name}</h2>
          </div>
          <div className={styles.info}>
            <p className={styles.info__title}>
              <span>
                <strong>films: </strong>
                {arrToString(films)}
              </span>
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>short films: </strong>
                {arrToString(shortFilms)}
              </span>
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>TV shows: </strong>
                {arrToString(tvShows)}
              </span>
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>video games: </strong>
                {arrToString(videoGames)}
              </span>
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>alignment: </strong>
                {alignment}
              </span>
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>park attractions: </strong>
                {arrToString(parkAttractions)}
              </span>
            </p>
            <p className={styles.info__title}>
              <strong>allies: </strong>
              {arrToString(allies)}
            </p>
            <p className={styles.info__title}>
              <span>
                <strong>enemies: </strong>
                {arrToString(enemies)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
