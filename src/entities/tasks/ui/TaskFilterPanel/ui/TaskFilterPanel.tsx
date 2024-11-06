// react
import { FC, useEffect, useRef, useState } from 'react';
//react-redux
import { useDispatch } from 'react-redux';
//actions
import { taskFilteredActionCreators } from '../model/actionCreators/taskFilterActionCreator';
//types
import { ITask } from '../../../model/types/taskTypes';
//assets
import ArrowUpFilter from '@/shared/libs/assets/svg/arrow-up-filter.svg?react';
import ArrowDownFilter from '@/shared/libs/assets/svg/arrow-down-filter.svg?react';
import FilterOnIcon from '@/shared/libs/assets/svg/filter-on-icon.svg?react';
import FilterOffIcon from '@/shared/libs/assets/svg/filter-off-icon.svg?react';
// styles
import styles from './TaskFilterPanel.module.scss';

interface TaskFilterPanelProps {
  tasks: ITask[];
}

export const TaskFilterPanel: FC<TaskFilterPanelProps> = ({ tasks }) => {
  const dispatch = useDispatch();

  const [filterActive, setFilterActive] = useState(false);
  const [deadlineOrder, setDeadlineOrder] = useState<'asc' | 'desc' | null>(
    null
  );
  const [checkboxFilterActive, setCheckboxFilterActive] = useState<
    string | null
  >(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const checkboxRef = useRef<HTMLSelectElement>(null);
  const tagSelectRef = useRef<HTMLSelectElement>(null);

  const tagsTasksList = Array.from(new Set(tasks.map((task) => task.tag)));

  useEffect(() => {
    setFilterActive(
      deadlineOrder !== null ||
        checkboxFilterActive !== null ||
        selectedTag !== null
    );

    const filteredTasks = tasks
      .filter((task) => {
        if (checkboxFilterActive === 'on') {
          return task.isComplete === true;
        } else if (checkboxFilterActive === 'off') {
          return task.isComplete === false;
        }
        return true;
      })
      .filter((task) => {
        if (selectedTag) {
          return task.tag === selectedTag;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.deadline).getTime();
        const dateB = new Date(b.deadline).getTime();
        return deadlineOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });

    dispatch(taskFilteredActionCreators.setFilteredTasks(filteredTasks));
  }, [deadlineOrder, checkboxFilterActive, selectedTag, tasks]);

  const toggleDeadlineOrder = () => {
    setDeadlineOrder((prev) =>
      prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'
    );
  };

  const resetFilters = () => {
    setDeadlineOrder(null);
    setCheckboxFilterActive(null);
    setSelectedTag(null);

    if (tagSelectRef.current) {
      tagSelectRef.current.value = '';
    }

    if (checkboxRef.current) {
      checkboxRef.current.value = '';
    }
  };

  return (
    <div className={styles.TaskFilterPanel}>
      <div className={styles.taskFilterSection}>
        <div className={`${styles.taskFilter} ${styles.checkboxFilter}`}>
          <select
            ref={checkboxRef}
            onChange={(e) => setCheckboxFilterActive(e.target.value || null)}
          >
            <option value=''></option>
            <option value='on'>on</option>
            <option value='off'>off</option>
          </select>
        </div>
      </div>
      <div
        className={`${styles.taskFilter} ${styles.titleFilter}`}
        onClick={resetFilters}
      >
        {filterActive ? <FilterOffIcon /> : <FilterOnIcon />}
      </div>
      <div className={styles.taskFilterSection}>
        <div
          className={`${styles.taskFilter} ${styles.deadlineFilter}`}
          onClick={toggleDeadlineOrder}
        >
          {deadlineOrder === 'asc' ? <ArrowUpFilter /> : <ArrowDownFilter />}
        </div>
        <div className={`${styles.taskFilter} ${styles.tagFilter}`}>
          <select
            ref={tagSelectRef}
            onChange={(e) => setSelectedTag(e.target.value || null)}
          >
            <option value=''></option>
            {tagsTasksList.map((tag: string, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
