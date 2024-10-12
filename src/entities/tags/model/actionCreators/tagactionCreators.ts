import { TagActionTypes } from '../actionTypes/tagActionTypes';
import { SetErrorType, SetLoadingType, SetTagsType } from '../types/tagActions';

const setIsLoading = (payload: SetLoadingType['payload']): SetLoadingType => {
  return {
    type: TagActionTypes.SET_IS_LOADING,
    payload: payload
  };
};

const setError = (payload: SetErrorType['payload']): SetErrorType => {
  return {
    type: TagActionTypes.SET_ERROR,
    payload: payload
  };
};

const setTags = (payload: SetTagsType['payload']): SetTagsType => {
  return {
    type: TagActionTypes.SET_TAGS,
    payload: payload
  };
};

export const tagActionCreators = {
  setTags,
  setError,
  setIsLoading
};
