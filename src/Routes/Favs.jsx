import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

function Favs() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favs'));
    setFavs(local);
  });

  return (
    <>
      <h1>Favs</h1>
      <div className="card-grid container">
        {favs.map((fav) => {
          return <Card Dentist={fav} key={fav.id} />;
        })}
      </div>
    </>
  );
}

export default Favs;
