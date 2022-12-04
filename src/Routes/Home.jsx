import { useState,  useEffect} from "react";
import Card from "../Components/Card";
import Dentist from "./Dentist";

const Home = () => {

  const [countDentistas, setCountDentistas] = useState([]);


  const handlerRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setCountDentistas([ ...json ]);
  };

  useEffect(() => {

    handlerRequest();

    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
    {
          countDentistas.map((dentista) => (
            <Card dentista={dentista} />
            )) 
    }
      </div>
    </>
  );
};

export default Home;
