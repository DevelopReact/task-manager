//redux
import { Reducer } from 'redux';
//types schema
import { TaskFilterStateSchema } from '../types/taskFilterTypes';
//action types
import { TaskFilterTypes } from '../actionTypes/TaskFilterTypes';

const initialState: TaskFilterStateSchema = {
  tasksFiltered: []
};

export const taskFilterReducer: Reducer<TaskFilterStateSchema, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskFilterTypes.SET_TASKS_FILTERED: {
      return { ...state, tasksFiltered: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
