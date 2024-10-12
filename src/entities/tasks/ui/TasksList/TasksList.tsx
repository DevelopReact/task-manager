// react
import { FC, useEffect, useRef, useState } from 'react';
//types
import { ITask } from '../../model/types/taskTypes';
//ui
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskFilterPanel } from '../TaskFilterPanel/TaskFilterPanel';
// styles
import styles from './TasksList.module.scss';

interface TasksListProps {
  tasks: ITask[];
}

export const TasksList: FC<TasksListProps> = ({ tasks }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [deadlineFilterActive, setDeadlineFilterActive] = useState(false);
  const [checkboxFilterActive, setCheckboxFilterActive] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tagSelectRef = useRef<HTMLSelectElement>(null);

  const tagsTasksList = Array.from(new Set(tasks.map((task) => task.tag)));

  useEffect(() => {
    setFilterActive(
      deadlineFilterActive || checkboxFilterActive || selectedTag !== null
    );
  }, [deadlineFilterActive, checkboxFilterActive, selectedTag]);

  const getFilteredTasks = () => {
    const filteredTasks = tasks
      .filter((task) => {
        if (checkboxFilterActive) {
          return task.isComplete === true;
        }
        return true;
      })
      .filter((task) => {
        if (selectedTag) {
          return task.tag === selectedTag;
        }
        return true;
      });

    if (deadlineFilterActive) {
      return filteredTasks.sort(
        (a, b) =>
          new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
    } else {
      return filteredTasks.sort(
        (a, b) =>
          new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
      );
    }
  };

  const resetFilters = () => {
    setDeadlineFilterActive(false);
    setCheckboxFilterActive(false);
    setSelectedTag(null);

    if (tagSelectRef.current) {
      tagSelectRef.current.value = '';
    }
  };

  return (
    <div className={styles.TasksList}>
      <TaskFilterPanel
        filterActive={filterActive}
        resetFilters={resetFilters}
        deadlineFilterActive={deadlineFilterActive}
        setDeadlineFilterActive={setDeadlineFilterActive}
        checkboxFilterActive={checkboxFilterActive}
        setCheckboxFilterActive={setCheckboxFilterActive}
        tagsTasksList={tagsTasksList}
        setSelectedTag={setSelectedTag}
        tagSelectRef={tagSelectRef}
      />
      {getFilteredTasks().map(
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
