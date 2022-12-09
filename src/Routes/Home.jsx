import React from "react";
import Card from "../Components/Card";

import { useContextGlobal } from "../Context/ContextGlobal";

const Home = () => {
  const { dataDentist } = useContextGlobal();

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dataDentist.map((dentist) => {
          return <Card Dentist={dentist} key={dentist.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
