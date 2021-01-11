import * as actionTypes from "./actionTypes";


export const loadingdata = (
  token: any,
  email: string,
  password: string,
  name: string,
  location: string,
  about: string,
  motto: string,
  phone: number,
  price: number,
) => {
  return {
    type: actionTypes.LOADING_PUT_DATA,
    email: email,
    password: password,
    name: name,
    location: location,
    about: about,
    motto: motto,
    phone: phone,
    price: price,
    token: token,
  };
};

export const putdata = (action: any) => {
  return {
    type: actionTypes.PUT_DATA,
    email: action.email,
    password: action.password,
    name: action.name,
    location: action.location,
    about: action.about,
    motto: action.motto,
    phone: action.phone,
    price: action.price,
    token: action.token,
  };
};

export const putdataFailed = (error: any) => {
  return {
    type: actionTypes.PUT_DATA_FAILED,
    error,
  };
};
