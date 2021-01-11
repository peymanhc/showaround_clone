import * as actionTypes from "../actions/actionTypes";

const initialState: {
  email: string;
  password: string;
  name: string;
  location: string;
  about: string;
  motto: string;
  phone: string;
  price: number;
  token: any;
  error: any;
  loading: boolean;
} = {
  email: "",
  password: "",
  name: "",
  location: "",
  about: "",
  motto: "",
  phone: "",
  price: 0,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_CARDS_LOADING:
      return {
        error: null,
        loading: true,
      };
    case actionTypes.PUT_DATA:
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        location: action.location,
        about: action.about,
        motto: action.motto,
        phone: action.phone,
        price: action.price,
        token: action.token,
        error: false,
      };
    case actionTypes.PUT_DATA_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
