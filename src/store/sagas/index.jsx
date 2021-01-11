import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { authUserSaga, LogginOut } from "./auth";
import { CardData } from "./card";
import { BestLeaders } from "./bestleaders";
import { PutData } from "./profile";
import { CreateTrip } from "./createtrip";
import {BlogPosts} from './blogPost'

export function* Sagas() {
    yield all([
        takeEvery(actionTypes.LOAD_CARDS_LOADING, CardData),
        takeEvery(actionTypes.BLOG_CARDS_LOADING, BlogPosts),
        takeEvery(actionTypes.LOAD_BESTLEADER_LOADING, BestLeaders),
        takeEvery(actionTypes.AUTH_SUCCESS, authUserSaga),
        takeEvery(actionTypes.AUTH_LOGOUT, LogginOut),
        takeEvery(actionTypes.LOADING_PUT_DATA, PutData),
        takeEvery(actionTypes.POST_TRIP_DATA, CreateTrip),
    ]);
}
