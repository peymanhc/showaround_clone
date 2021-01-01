import axios from "../../shared/axios-datas";
import { put } from "redux-saga/effects";
import { putdata, putdataFailed } from '../actions/profile'
import Swal from "sweetalert2";

export function* PutData(action) {
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
        const res = yield axios.put(url,authData);
        yield put(putdata(res.data))
        yield Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data post",
        });

    } catch (error) {
        yield put(putdataFailed(error));
        yield Swal.fire({
            icon: "error",
            title: "Failed",
            text:"Some thing is wrong",
          });
    }
}