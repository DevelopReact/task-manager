import { TaskFilterTypes } from '../actionTypes/TaskFilterTypes';
import { SetFilteredTasks } from '../types/taskFilterActions';

const setFilteredTasks = (
  payload: SetFilteredTasks['payload']
): SetFilteredTasks => {
  return {
    type: TaskFilterTypes.SET_TASKS_FILTERED,
    payload: payload
  };
};

export const taskFilteredActionCreators = {
  setFilteredTasks
};
