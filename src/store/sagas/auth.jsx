import axios from "../../shared/axios-datas";
import { call, put } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes'
import Swal from "sweetalert2";

export function* authUserSaga(action) {
  const authData = {
    token: "token",
    email: action.email,
    password: action.password,
    name: action.name,
    location: action.location,
    about: action.about,
    motto: action.motto,
    phone: action.phone,
    price: action.price,
  };
  let url = "/users";
  try {
    const res = yield axios.post(url, authData);
    yield localStorage.setItem("token", authData.token)
    yield Swal.fire({
      icon: "success",
      title: "Success",
      text: "We contact you soon",
    });
    setTimeout(() => {
      window.location.href ="/";
    }, 800);
    yield put(actionTypes.AUTH_SUCCESS(res.data));
  } catch (error) {
  }
}
export function* LogginOut(action) {
  yield call([localStorage, "removeItem"], "token");
  setTimeout(() => {
    window.location = "/"
  }, 500);
}
