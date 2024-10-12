import { TaskActionTypes } from '../actionTypes/TaskActionTypes';
import {
  SetErrorType,
  SetIsSuccess,
  SetLoadingType,
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

const setIsSuccess = (payload: SetIsSuccess['payload']): SetIsSuccess => {
  return {
    type: TaskActionTypes.SET_IS_SUCCESS,
    payload: payload
  };
};

export const taskActionCreators = {
  setTasks,
  setError,
  setIsLoading,
  setIsSuccess
};
