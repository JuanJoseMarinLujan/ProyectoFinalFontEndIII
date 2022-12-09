import axios from "axios";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  useReducer,
} from "react";

import { initialState, reducer } from "./reducer.js";

export const ContextGlobal = createContext();

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [favoritos, setFavoritos] = useState([]);

  const getDataDentistList = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: "GET_DENTIST",
      payload: resp.data,
    });
  };

  const getDataFavsDentistList = async (id) => {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    dispatch({
      type: "GET_FAVS_DENTIST",
      payload: resp.data,
    });
    localStorage.setItem("favs", JSON.stringify(state.dataFavsDentist));
  };

  const deleteFav = (id) => {
    const newFav = favoritos.filter((i) => i.id !== id)
    setFavoritos(newFav);
    dispatch({
      type: "GET_FAVS_DENTIST",
      payload: newFav,
    });
    localStorage.setItem("favs", JSON.stringify(newFav));
  }

  useEffect(() => {
    getDataDentistList();
  }, [])

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("favs"));
    setFavoritos(local)
  }, [state.dataFavsDentist])

  return (
    <ContextGlobal.Provider
      value={{
        dataDentist: state.dataDentist,
        favoritos,
        deleteFav,
        getDataDentistList,
        getDataFavsDentistList,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
