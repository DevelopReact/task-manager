import { TagStateSchema } from '@/entities/tags/model/types/tagTypes';
import { TaskStateSchema } from '@/entities/tasks/model/types/taskTypes';
import { TaskFilterStateSchema } from '@/entities/tasks/ui/TaskFilterPanel/model/types/taskFilterTypes';

export interface stateSchema {
  task: TaskStateSchema;
  tag: TagStateSchema;
  tasksFiltered: TaskFilterStateSchema;
}
