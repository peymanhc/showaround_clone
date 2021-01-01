import axios from "../../shared/axios-datas";
import { put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { postTripdata } from "../actions/createTrip";

export function* CreateTrip(action) {
    const authData = {
        location: action.location,
        datefrom: action.datefrom,
        dateto: action.dateto,
        numberofpeople: action.numberofpeople,
    };
    let url = "/Trips";
    try {
        const res = yield axios.post(url, authData);
        yield put(postTripdata(res.data))
        yield Swal.fire({
            icon: "success",
            title: "Success",
            text: "We contact you soon",
        });
    } catch (error) {
        yield Swal.fire({
          icon: "error",
          title: "Failed",
          text:"Some thing is wrong",
        });
    }
}