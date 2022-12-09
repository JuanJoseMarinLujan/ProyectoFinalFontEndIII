import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

function Favs() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const localStrg = JSON.parse(localStorage.getItem("favs"));
    setFavs(localStrg);
  }, []);

  return (
    <>
      <h1>Favs</h1>
      <div className="card-grid container">
        {favs.map((fav) => {
          return <Card Dentist={fav} key={fav.id + 1000000} />;
        })}
      </div>
    </>
  );
}

export default Favs;
