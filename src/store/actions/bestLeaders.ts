import * as actionTypes from "./actionTypes";

export const loadBestCards = (data: any) => {
  return {
    type: actionTypes.LOAD_BESTLEADER,
    data,
  };
};

export const loadBestCardsFailed = (error: any) => {
  return {
    type: actionTypes.LOAD_BESTLEADER_FAILED,
    error,
  };
};

export const loadingBestCards = () => {
  return {
    type: actionTypes.LOAD_BESTLEADER_LOADING,
  };
};
