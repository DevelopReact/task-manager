//api
import { mockapiInstance } from '@/shared/api/mockapiInstance';
//types
import {
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  GetTasksRequest,
  GetTasksResponse,
  UpdateTaskRequest
} from '../types/tasksServicesTypes';

class taskService {
  private taskEndpoint = '/tasks';

  async getTasks(
    { completeMark, deadline, tag }: GetTasksRequest,
    page: number
  ) {
    const params = new URLSearchParams();

    if (tag) {
      params.set('tag', tag);
    }

    if (completeMark) {
      params.set('isComplete', String(completeMark));
    }

    if (deadline !== null) {
      params.set('sortBy', deadline === 'asc' ? 'deadline' : '-deadline');
    }

    const queryString = params.toString();

    return mockapiInstance.get<GetTasksResponse>(
      `${this.taskEndpoint}?page=${page}&limit=${8}&${queryString}`
    );
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
