import * as actionTypes from "./actionTypes";

export const authSuccess = (
  token: any,
  email: string,
  password: string,
  name: string,
  location: string,
  about: string,
  motto: string,
  phone: string,
  price: number,
) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
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

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
