import React from "react";
import styles from "./Card.module.css";

import { useContextGlobal } from "../Context/ContextGlobal";

const Card = ({ Dentist }) => {
  const { getDataFavsDentistList, favoritos, deleteFav } = useContextGlobal();

  function handleClickFav() {
    getDataFavsDentistList(Dentist.id);
  }

  function handleClickDelete() {
    deleteFav(Dentist.id);
  }

  function isFavorite(id) {
    return favoritos.include(id) ? true : false;
  }

  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentist/${Dentist.id}`}>
            <h5 className={`card-title ${styles.title}`}>{Dentist.name}</h5>
          </a>
          <p>{Dentist.username}</p>
          {isFavorite ? <button onClick={() => handleClickFav()}>⭐</button> : <button onClick={() => handleClickDelete()}>❎</button> }
        </div>
      </div>
    </>
  );
};

export default Card;
