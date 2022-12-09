import axios from "axios";
import {
  useEffect,
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

  const getDataDentistList = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: "GET_DENTIST",
      payload: resp.data,
    });
  };

  useEffect(() => {
    getDataDentistList();
  }, [])

  return (
    <ContextGlobal.Provider
      value={{
        dataDentist: state.dataDentist,
        getDataDentistList,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
