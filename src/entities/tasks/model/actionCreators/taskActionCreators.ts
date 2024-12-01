import { TaskActionTypes } from '../actionTypes/TaskActionTypes';
import {
  SetErrorType,
  SetFiltersType,
  SetIsSuccessType,
  SetLoadingType,
  SetMetaCurrentPageType,
  SetMetaType,
  SetTasksType
} from '../types/taskActions';

const setIsLoading = (payload: SetLoadingType['payload']): SetLoadingType => {
  return {
    type: TaskActionTypes.SET_IS_LOADING,
    payload: payload
  };
};

const setError = (payload: SetErrorType['payload']): SetErrorType => {
  return {
    type: TaskActionTypes.SET_ERROR,
    payload: payload
  };
};

const setTasks = (payload: SetTasksType['payload']): SetTasksType => {
  return {
    type: TaskActionTypes.SET_TASKS,
    payload: payload
  };
};

const setMeta = (payload: SetMetaType['payload']): SetMetaType => {
  return {
    type: TaskActionTypes.SET_META,
    payload: payload
  };
};

const setMetaCurrentPage = (
  payload: SetMetaCurrentPageType['payload']
): SetMetaCurrentPageType => {
  return {
    type: TaskActionTypes.SET_META_CURRENT_PAGE,
    payload: payload
  };
};

const setIsSuccess = (
  payload: SetIsSuccessType['payload']
): SetIsSuccessType => {
  return {
    type: TaskActionTypes.SET_IS_SUCCESS,
    payload: payload
  };
};

const setFilters = (payload: SetFiltersType['payload']): SetFiltersType => {
  return {
    type: TaskActionTypes.SET_FILTERS,
    payload: payload
  };
};

export const taskActionCreators = {
  setTasks,
  setError,
  setIsLoading,
  setIsSuccess,
  setFilters,
  setMeta,
  setMetaCurrentPage
};
