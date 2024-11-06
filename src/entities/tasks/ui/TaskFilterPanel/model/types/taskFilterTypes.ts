export interface ITaskFilter {
  id: number;
  title: string;
  description: string;
  deadline: string;
  tag: string;
  isComplete: boolean;
}

export interface TaskFilterStateSchema {
  tasksFiltered: ITaskFilter[];
}
