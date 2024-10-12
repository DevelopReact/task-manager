import { TagActionTypes } from '../actionTypes/tagActionTypes';
import { TagStateSchema } from './tagTypes';

export type SetLoadingType = {
  type: TagActionTypes.SET_IS_LOADING;
  payload: TagStateSchema['isLoading'];
};

export type SetErrorType = {
  type: TagActionTypes.SET_ERROR;
  payload: TagStateSchema['error'];
};

export type SetTagsType = {
  type: TagActionTypes.SET_TAGS;
  payload: TagStateSchema['tags'];
};

export type TagActions = SetLoadingType | SetErrorType | SetTagsType;
