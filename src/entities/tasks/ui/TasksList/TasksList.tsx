// react
import { FC } from 'react';
//types
import { ITask } from '../../model/types/taskTypes';
//ui
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskFilterPanel } from '../TaskFilterPanel/ui';
// styles
import styles from './TasksList.module.scss';

interface TasksListProps {
  tasks: ITask[];
  tasksFiltered: ITask[];
}

export const TasksList: FC<TasksListProps> = ({ tasks, tasksFiltered }) => {
  return (
    <div className={styles.TasksList}>
      <TaskFilterPanel tasks={tasks} />
      {tasksFiltered.map(
        ({ id, title, deadline, description, tag, isComplete }) => (
          <TaskItem
            id={id}
            isComplete={isComplete}
            deadline={deadline}
            title={title}
            description={description}
            tag={tag}
            key={id}
          />
        )
      )}
    </div>
  );
};
