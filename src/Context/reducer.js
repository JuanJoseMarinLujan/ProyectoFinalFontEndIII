export const initialState = {
  dataDentist: [],
  theme: "light",
};

export const types = {
  SET_THEME_LIGHT: "SET_THEME_LIGHT",
  SET_THEME_DARK: "SET_THEME_DARK",
  GET_DENTIST: "GET_DENTIST",
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.SET_THEME_LIGHT:
      return { ...state, theme: payload };
    case types.SET_THEME_DARK:
      return { ...state, theme: payload };
    case types.GET_DENTIST:
      return { ...state, dataDentist: payload };
    default: {
      throw state;
    }
  }
};
