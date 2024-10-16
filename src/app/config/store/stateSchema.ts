import { TagStateSchema } from '@/entities/tags/model/types/tagTypes';
import { TaskStateSchema } from '@/entities/tasks/model/types/taskTypes';

export interface stateSchema {
  task: TaskStateSchema;
  tag: TagStateSchema;
}
