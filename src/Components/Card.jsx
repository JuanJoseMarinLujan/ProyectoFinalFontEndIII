import React from "react";
import styles from "./Card.module.css";

const Card = ({ Dentist }) => {
  function handleClickFav() {
    if (localStorage.getItem('favs')) {
      let localStrg = JSON.parse(localStorage.getItem('favs'));
      if (localStrg.find((e) => e.id === Dentist.id)) {
        return
      } else {
        localStrg.push(Dentist);
        localStorage.setItem('favs', JSON.stringify(localStrg));
      }
      console.log(localStrg);
    } else {
      localStorage.setItem('favs', JSON.stringify([Dentist]));
    }
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
          <button onClick={handleClickFav}>⭐</button>
        </div>
      </div>
    </>
  );
};

export default Card;
