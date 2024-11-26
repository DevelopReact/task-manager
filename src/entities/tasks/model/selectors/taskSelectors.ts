//store
import { StateSchema } from '@/app/config/store/stateSchema';
//types
import { ITask } from '../types/taskTypes';

export const getTaskState = (state: StateSchema) => state.task;

export const getMetaState = (page: number) => (state: StateSchema) => {
  return state.task.meta;
};

export const getTaskById = (id: ITask['id']) => (state: StateSchema) => {
  return state.task.tasks.find((task) => task.id === id);
};

export const getTaskFilters = (state: StateSchema) => state.task.filters;
