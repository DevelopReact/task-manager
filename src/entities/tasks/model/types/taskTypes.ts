export interface ITask {
  id: number;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  isComplete: boolean;
}

export interface TaskStateSchema {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  tasks: ITask[];
  error: string;
  isLoading: boolean;
  isSuccess: boolean;
  filters: {
    tag: string;
    completeMark: string;
    deadline: 'asc' | 'desc' | null;
  };
}
