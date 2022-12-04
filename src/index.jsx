import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Favs } from "./Routes/Favs";
import { Contacto } from "./Routes/Contacto";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      < Routes >
          <Route path="/" element={ <App/> } > 
          <Route path="/favs" element={ <Favs/> } />
          <Route path="/contacto" element={ <Contacto/> } />
          <Route path="/home" element={ <Home/> } />
          </Route>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
