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
  const [deadlineOrder, setDeadlineOrder] = useState<'asc' | 'desc' | null>(
    null
  );
  const [checkboxFilterActive, setCheckboxFilterActive] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tagSelectRef = useRef<HTMLSelectElement>(null);

  const tagsTasksList = Array.from(new Set(tasks.map((task) => task.tag)));

  useEffect(() => {
    setFilterActive(
      deadlineOrder !== null || checkboxFilterActive || selectedTag !== null
    );
  }, [deadlineOrder, checkboxFilterActive, selectedTag]);

  const getFilteredTasks = () => {
    let filteredTasks = tasks
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

    if (deadlineOrder) {
      filteredTasks = filteredTasks.sort((a, b) => {
        const dateA = new Date(a.deadline).getTime();
        const dateB = new Date(b.deadline).getTime();
        return deadlineOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
    }

    return filteredTasks;
  };

  const toggleDeadlineOrder = () => {
    setDeadlineOrder((prev) =>
      prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'
    );
  };

  const resetFilters = () => {
    setDeadlineOrder(null);
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
        toggleDeadlineOrder={toggleDeadlineOrder}
        checkboxFilterActive={checkboxFilterActive}
        setCheckboxFilterActive={setCheckboxFilterActive}
        tagsTasksList={tagsTasksList}
        setSelectedTag={setSelectedTag}
        tagSelectRef={tagSelectRef}
        deadlineOrder={deadlineOrder}
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
