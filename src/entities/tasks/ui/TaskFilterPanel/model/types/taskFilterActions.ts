//action types
import { TaskFilterTypes } from '../actionTypes/TaskFilterTypes';
//types
import { TaskFilterStateSchema } from './taskFilterTypes';

export type SetFilteredTasks = {
  type: TaskFilterTypes.SET_TASKS_FILTERED;
  payload: TaskFilterStateSchema['tasksFiltered'];
};

export type TaskFilterActions = SetFilteredTasks;
