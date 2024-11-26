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
  isSuccess: false,
  filters: {
    completeMark: '',
    deadline: null,
    tag: ''
  },
  meta: {
    total_items: 0,
    total_pages: 0,
    current_page: 0,
    per_page: 0,
    remaining_count: 0
  }
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

    case TaskActionTypes.SET_META: {
      return { ...state, meta: action.payload };
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

    case TaskActionTypes.SET_FILTERS: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    }

    default: {
      return { ...state };
    }
  }
};
