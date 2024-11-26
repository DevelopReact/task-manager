import { TagStateSchema } from '@/entities/tags/model/types/tagTypes';
import { TaskStateSchema } from '@/entities/tasks/model/types/taskTypes';
import { UserStateSchema } from '@/entities/user/model/types/userTypes';

export interface StateSchema {
  task: TaskStateSchema;
  tag: TagStateSchema;
  user: UserStateSchema;
}
