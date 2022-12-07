import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setDentist(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentist.map((dentist) => {
          return <Card Dentist={dentist} key={dentist.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
