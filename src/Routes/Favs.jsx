import React, { useEffect, useState } from "react";

import styles from "../Components/Card.module.css";

function Favs() {
  const [favs, setFavs] = useState([]);

  function getLocalStorage() {
    const localStrg = JSON.parse(localStorage.getItem("favs"));
    setFavs(localStrg);
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  function handleClickDelete(id) {
    let newFavs = favs.filter((e) => e.id !== id);
    localStorage.setItem('favs', JSON.stringify(newFavs));
    getLocalStorage();
  }

  return (
    <>
      <h1>Favs</h1>
      <div className="card-grid container">
        {favs.map((fav) => {
          return (<div className={`card`} key={fav.id}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>
            <a href={`/dentist/${fav.id}`}>
              <h5 className={`card-title ${styles.title}`}>{fav.name}</h5>
            </a>
            <p>{fav.username}</p>
            <button onClick={() => handleClickDelete(fav.id)}>❎</button>
          </div>
        </div>);
        })}
      </div>
    </>
  );
}

export default Favs;
