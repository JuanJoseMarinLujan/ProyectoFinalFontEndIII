import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { useContextGlobal } from "./Context/ContextGlobal";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const { globalTheme } = useContextGlobal();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });

  return (
    <>
      <div className={`app ${globalTheme}}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
