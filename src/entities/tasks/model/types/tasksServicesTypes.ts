import { ITask } from './taskTypes';

export type GetTasksRequest = void;

export type GetTasksResponse = ITask[];

export type DeleteTaskRequest = ITask['id'];

export type DeleteTaskResponse = number;

export interface UpdateTaskRequest {
  updatedTaskId: ITask['id'];
  updatedFields: Partial<Omit<ITask, 'id'>>;
}

export type CreateTaskRequest = Omit<ITask, 'id'>;

export type CreateTaskResponse = ITask;
