import * as actionTypes from "./actionTypes";

export const loadCards = (data: any) => {
  return {
    type: actionTypes.BLOG_CARDS,
    data,
  };
};

export const loadCardsFailed = (error: any) => {
  return {
    type: actionTypes.BLOG_CARDS_FAILED,
    error,
  };
};

export const loadingCards = () => {
  return {
    type: actionTypes.BLOG_CARDS_LOADING,
  };
};
