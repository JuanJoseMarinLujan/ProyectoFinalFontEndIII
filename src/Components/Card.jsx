import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ Dentist }) => {
  const [fav, setFav] = useState([]);

  function handleClick() {
    setFav([...fav, Dentist]);
    localStorage.setItem("favs", JSON.stringify(fav));
  }
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/${Dentist.id}`}>
            <h5 className={`card-title ${styles.title}`}>{Dentist.name}</h5>
          </a>
          <p>{Dentist.username}</p>
          <button onClick={handleClick}>⭐</button>
        </div>
      </div>
    </>
  );
};

export default Card;
