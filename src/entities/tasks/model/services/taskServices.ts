//api
import { mockapiInstance } from '@/shared/api/mockapiInstance';
//types
import {
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  GetTasksResponse,
  UpdateTaskRequest
} from '../types/tasksServicesTypes';
import { createSearchParams } from 'react-router-dom';

class taskService {
  private taskEndpoint = '/tasks';

  async getTasks({ searchQuery }: { searchQuery?: string }) {
    // const params = new URLSearchParams();

    // if (searchQuery) {
    //   params.set('name', searchQuery);
    // }

    // const queryString = params.toString();

    // return mockapiInstance.get<GetTasksResponse>(
    //   `${this.taskEndpoint}?${queryString}`
    // );

    return mockapiInstance.get<GetTasksResponse>(`${this.taskEndpoint}`);
  }

  async createTask(task: CreateTaskRequest) {
    return mockapiInstance.post<CreateTaskResponse>(this.taskEndpoint, task);
  }

  async updateTask({ updatedFields, updatedTaskId }: UpdateTaskRequest) {
    return mockapiInstance.patch<UpdateTaskRequest>(
      `${this.taskEndpoint}/${updatedTaskId}`,
      updatedFields
    );
  }

  async deleteTask(id: DeleteTaskRequest) {
    return mockapiInstance.delete<DeleteTaskResponse>(
      `${this.taskEndpoint}/${id}`
    );
  }
}

export const taskServices = new taskService();
