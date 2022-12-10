import React, { useState } from "react";
import styles from "../Components/Form.module.css";

const LoginForm = () => {
  const [handler, setHandler] = useState(false);
  const [estado, setEstado] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    estado.name.length > 5 ? setHandler(true) : setHandler(false);
  };

  function inputManager(e) {
    const { name, value } = e.target;
    setEstado({ ...estado, [name]: value });
  }

  return (
    <>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you.</p>
      </div>
      <div className={`text-center card container ${styles.card}`}>
        <div className={` ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`${styles.inputSpacing}`}
              placeholder="Full Name"
              name="name"
              onChange={inputManager}
              required
            />
            <input
              className={`${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              onChange={inputManager}
              required
            />
            <button className="btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        {handler ? (
          <h5>
            Gracias {estado.name}, te contactaremos cuanto antes via email.
          </h5>
        ) : (
          <h5>Valida los datos</h5>
        )}
      </div>
    </>
  );
};

export default LoginForm;
