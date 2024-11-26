import { UserActionTypes } from '../actionTypes/userActionTypes';
import { UserStateSchema } from './userTypes';

export type SetLoadingType = {
  type: UserActionTypes.SET_IS_LOADING;
  payload: UserStateSchema['isLoading'];
};

export type SetErrorType = {
  type: UserActionTypes.SET_ERROR;
  payload: UserStateSchema['error'];
};

export type SetUserType = {
  type: UserActionTypes.SET_USER;
  payload: UserStateSchema['user'];
};

export type SetIsSuccessType = {
  type: UserActionTypes.SET_IS_SUCCESS;
  payload: UserStateSchema['isSuccess'];
};

export type UserActions =
  | SetLoadingType
  | SetErrorType
  | SetUserType
  | SetIsSuccessType;
