import axios from "../../shared/axios-datas";
import { put } from "redux-saga/effects";
import { loadCards, loadCardsFailed } from '../actions/cards'

export function* CardData(action) {
  let url = "/profiles";
  try {
    const res = yield axios.get(url);
    yield put(loadCards(res.data))

  } catch (error) {
    yield put(loadCardsFailed(error));
  }
}