// react
import { FC } from 'react';
//types
import { ITask } from '../../model/types/taskTypes';
//ui
import { TaskItem } from '../index';
// styles
import styles from './TasksList.module.scss';

interface TasksListProps {
  tasks: ITask[];
}

export const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <div className={styles.TasksList}>
      {tasks.map(({ id, title, deadline, description, tag, isComplete }) => (
        <TaskItem
          id={id}
          isComplete={isComplete}
          deadline={deadline}
          title={title}
          description={description}
          tag={tag}
          key={id}
        />
      ))}
    </div>
  );
};
