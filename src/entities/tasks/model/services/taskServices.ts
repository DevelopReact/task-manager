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

class taskService {
  private taskEndpoint = '/tasks';

  async getTasks() {
    return mockapiInstance.get<GetTasksResponse>(this.taskEndpoint);
  }

  async createTask(task: CreateTaskRequest) {
    return mockapiInstance.post<CreateTaskResponse>(this.taskEndpoint, task);
  }

  async updateTask({ updatedFields, updatedTaskId }: UpdateTaskRequest) {
    return mockapiInstance.put<UpdateTaskRequest>(
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
