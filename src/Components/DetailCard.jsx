import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then((response) => response.json())
    .then((data) => (setDentist(data)))
  });
  return (
    <>
      <h1>Detail about Dentist {dentist.id}</h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Name: {dentist.name}</li>
              <li className="list-group-item">
                Email: {dentist.email}
              </li>
              <li className="list-group-item">
                Phone: {dentist.phone}
              </li>
              <li className="list-group-item">
                Phone: {dentist.website}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
