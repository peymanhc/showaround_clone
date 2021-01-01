import * as actionTypes from "../actions/actionTypes";

const initialState: {
  email: string;
  password: string;
  name: string;
  location: string;
  about: string;
  motto: string;
  phone: number;
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
  phone: 0,
  price: 0,
  token: null,
  error: null,
  loading: false,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        email: action.email,
        password: action.password,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
