//action types
import { UserActionTypes } from '../actionTypes/userActionTypes';

import {
  SetErrorType,
  SetIsSuccessType,
  SetLoadingType,
  SetUserType
} from '../types/userActions';

const setIsLoading = (payload: SetLoadingType['payload']): SetLoadingType => {
  return {
    type: UserActionTypes.SET_IS_LOADING,
    payload: payload
  };
};

const setError = (payload: SetErrorType['payload']): SetErrorType => {
  return {
    type: UserActionTypes.SET_ERROR,
    payload: payload
  };
};

const setUser = (payload: SetUserType['payload']): SetUserType => {
  return {
    type: UserActionTypes.SET_USER,
    payload: payload
  };
};

const setIsSuccess = (
  payload: SetIsSuccessType['payload']
): SetIsSuccessType => {
  return {
    type: UserActionTypes.SET_IS_SUCCESS,
    payload: payload
  };
};

export const userActionCreators = {
  setIsLoading,
  setError,
  setUser,
  setIsSuccess
};
