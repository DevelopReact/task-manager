export interface ITask {
  id: number;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  isComplete: boolean;
}

export interface TaskStateSchema {
  tasks: ITask[];
  error: string;
  isLoading: boolean;
  isSuccess: boolean;
}
