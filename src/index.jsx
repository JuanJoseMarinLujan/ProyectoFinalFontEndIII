import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import LoginForm from "./Components/LoginForm";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import DetailCard from "./Components/DetailCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<LoginForm />} />
          <Route path="/favoritos" element={<Favs />} />
          <Route path="/dentist/:id" element={<DetailCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
