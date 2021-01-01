import * as actionTypes from "../actions/actionTypes";

const initialState: {
  data: any,
  error: any,
  loading: boolean,
} = {
  data:null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_CARDS_LOADING:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case actionTypes.LOAD_CARDS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case actionTypes.LOAD_CARDS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
