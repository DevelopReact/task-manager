import { TaskActionTypes } from '../actionTypes/TaskActionTypes';
import { TaskStateSchema } from './taskTypes';

export type SetLoadingType = {
  type: TaskActionTypes.SET_IS_LOADING;
  payload: TaskStateSchema['isLoading'];
};

export type SetErrorType = {
  type: TaskActionTypes.SET_ERROR;
  payload: TaskStateSchema['error'];
};

export type SetTasksType = {
  type: TaskActionTypes.SET_TASKS;
  payload: TaskStateSchema['tasks'];
};

export type SetMetaType = {
  type: TaskActionTypes.SET_META;
  payload: TaskStateSchema['meta'];
};

export type SetIsSuccessType = {
  type: TaskActionTypes.SET_IS_SUCCESS;
  payload: TaskStateSchema['isSuccess'];
};

export type SetFiltersType = {
  type: TaskActionTypes.SET_FILTERS;
  payload: Partial<TaskStateSchema['filters']>;
};

export type TaskActions =
  | SetLoadingType
  | SetErrorType
  | SetTasksType
  | SetIsSuccessType
  | SetFiltersType
  | SetMetaType;
