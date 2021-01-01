import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import authReducer from "./store/reducers/auth";
import CardReducer from "./store/reducers/cards";
import BlogReducer from "./store/reducers/blogPost";
import BestLeaders from "./store/reducers/bestCards";
import Profile from "./store/reducers/profile";
import Trip from "./store/reducers/createTrip";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Sagas } from "./store/sagas/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  card: CardReducer,
  bestleader: BestLeaders,
  profile: Profile,
  Trips: Trip, 
  BlogPosts: BlogReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
