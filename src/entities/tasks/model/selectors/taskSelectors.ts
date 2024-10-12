//store
import { stateSchema } from '@/app/config/store/stateSchema';
//types
import { ITask } from '../types/taskTypes';

export const getTaskState = (state: stateSchema) => state.task;

export const getTaskById = (id: ITask['id']) => (state: stateSchema) => {
  return state.task.tasks.find((task) => task.id === id);
};
