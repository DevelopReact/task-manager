// react
import { FC, useEffect, useMemo, useRef, useState } from 'react';
//react-redux
import { useSelector } from 'react-redux';
//selectors
import { getTaskFilters } from '../../model/selectors/taskSelectors';
//types
import { ITask } from '../../model/types/taskTypes';
//ui
import { TaskFilterCompleteMark } from '../TaskFilterCompleteMark';
import { TaskFilterSortDeadline } from '../TaskFilterSortDeadline';
import { TaskFilterReset } from '../TaskFilterReset';
import { TaskFilterTags } from '../TaskFilterTags';
// styles
import styles from './TaskFilterPanel.module.scss';

interface TaskFilterPanelProps {
  tasks: ITask[];
}

export const TaskFilterPanel: FC<TaskFilterPanelProps> = ({ tasks }) => {
  const { deadline, tag, completeMark } = useSelector(getTaskFilters);

  const checkboxRef = useRef<HTMLSelectElement | null>(null);
  const tagSelectRef = useRef<HTMLSelectElement | null>(null);

  const [filterActive, setFilterActive] = useState(false);

  const tagsTasksList = useMemo(() => {
    return Array.from(new Set(tasks.map((task) => task.tag)));
  }, []);

  useEffect(() => {
    setFilterActive(Boolean(deadline) || Boolean(tag) || Boolean(completeMark));
  }, [deadline, tag, completeMark]);

  return (
    <div className={styles.TaskFilterPanel}>
      <TaskFilterCompleteMark checkboxRef={checkboxRef} />
      <TaskFilterReset
        filterActive={filterActive}
        checkboxRef={checkboxRef}
        tagSelectRef={tagSelectRef}
      />
      <div className={styles.taskFilterSection}>
        <TaskFilterSortDeadline deadline={deadline} />
        <TaskFilterTags
          tagsTasksList={tagsTasksList}
          tagSelectRef={tagSelectRef}
        />
      </div>
    </div>
  );
};
