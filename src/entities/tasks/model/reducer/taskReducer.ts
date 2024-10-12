//redux
import { Reducer } from 'redux';
//types
import { TaskStateSchema } from '../types/taskTypes';
import { TaskActions } from '../types/taskActions';
import { TaskActionTypes } from '../actionTypes/TaskActionTypes';

const initialState: TaskStateSchema = {
  error: '',
  isLoading: false,
  tasks: [],
  isSuccess: false
};

export const taskReducer: Reducer<TaskStateSchema, TaskActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case TaskActionTypes.SET_TASKS: {
      return { ...state, tasks: action.payload };
    }

    case TaskActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case TaskActionTypes.SET_IS_SUCCESS: {
      return {
        ...state,
        isSuccess: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
};
