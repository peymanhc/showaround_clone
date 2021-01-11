import * as actionTypes from "../actions/actionTypes";

const initialState: {
  location: string;
  Datefrom: string;
  Dateto: string;
  numberofpeople: string;
  error: any;
  loading: boolean;
} = {
  location: "",
  Datefrom: "",
  Dateto: "",
  numberofpeople: "",
  error: null,
  loading: false,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.START_CREATE_TRIP:
      return {
        error: null,
        loading: true,
      };
    case actionTypes.POST_TRIP_DATA:
      return {
        ...state,
        location: action.location,
        datefrom: action.datefrom,
        dateto: action.dateto,
        numberofpeople: action.numberofpeople,
      };
    case actionTypes.POST_TRIP_DATA_FAILED:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
