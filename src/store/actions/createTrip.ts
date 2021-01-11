import * as actionTypes from "./actionTypes";

export const loadingTripdata = (
  location: string,
  datefrom: string,
  dateto: string,
  numberofpeople: string
) => {
  return {
    type: actionTypes.POST_TRIP_DATA,
    location: location,
    datefrom: datefrom,
    dateto: dateto,
    numberofpeople: numberofpeople,
  };
};
export const postTripdata = (action: any) => {
  return {
    type: actionTypes.START_CREATE_TRIP,
    location: action.location,
    datefrom: action.datefrom,
    dateto: action.dateto,
    numberofpeople: action.numberofpeople,
  };
};

export const postTripdataFailed = (error: any) => {
  return {
    type: actionTypes.POST_TRIP_DATA_FAILED,
    error,
  };
};
