import { ITask, TaskStateSchema } from './taskTypes';

export type GetTasksRequest = TaskStateSchema['filters'];

export interface GetTasksResponse {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: ITask[];
}

export type DeleteTaskRequest = ITask['id'];

export type DeleteTaskResponse = number;

export interface UpdateTaskRequest {
  updatedTaskId: ITask['id'];
  updatedFields: Partial<Omit<ITask, 'id'>>;
}

export type CreateTaskRequest = Omit<ITask, 'id'>;

export type CreateTaskResponse = ITask;
