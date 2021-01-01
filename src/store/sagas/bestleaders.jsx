import axios from "../../shared/axios-datas";
import { put } from "redux-saga/effects";
import { loadBestCards, loadBestCardsFailed } from "../actions/bestLeaders";

export function* BestLeaders(action) {
    let url = "/bestLeaders";
    try {
        const res = yield axios.get(url);
        yield put(loadBestCards(res.data))

    } catch (error) {
        yield put(loadBestCardsFailed(error));
    }
}
