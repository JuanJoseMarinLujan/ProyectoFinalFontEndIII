import axios from "axios";
import { useEffect, createContext, useContext, useReducer } from "react";

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

  const switchThemeLight = () => {
    dispatch({
      type: "SET_THEME_LIGHT",
      payload: "light",
    });
  };

  const switchThemeDark = () => {
    dispatch({
      type: "SET_THEME_DARK",
      payload: "dark",
    });
  };

  useEffect(() => {
    getDataDentistList();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dataDentist: state.dataDentist,
        globalTheme: state.theme,
        getDataDentistList,
        switchThemeLight,
        switchThemeDark,
      }}
    >
      <div className={`${state.theme}`}>{children}</div>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
