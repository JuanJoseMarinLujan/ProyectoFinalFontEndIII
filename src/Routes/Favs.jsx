import React from "react";
import Card from "../Components/Card";

import { useContextGlobal } from "../Context/ContextGlobal";

function Favs() {
  const { favoritos } = useContextGlobal();
  
  return (
    <>
      <h1>Favs</h1>
      <div className="card-grid container">
        {favoritos.map((fav) => {
          return <Card Dentist={fav} key={fav.id} />;
        })}
      </div>
    </>
  );
}

export default Favs;
