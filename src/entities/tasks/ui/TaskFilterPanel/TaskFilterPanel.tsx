// react
import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from 'react';
//react-redux
import { useSelector } from 'react-redux';
//actions
import { taskActionCreators } from '@/entities/tasks/model/actionCreators/taskActionCreators';
//selectors
import { getTaskFilters } from '../../model/selectors/taskSelectors';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//types
import { ITask } from '../../model/types/taskTypes';
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

  const { deadline, tag, completeMark } = useSelector(getTaskFilters);

  const [filterActive, setFilterActive] = useState(false);

  const checkboxRef = useRef<HTMLSelectElement>(null);
  const tagSelectRef = useRef<HTMLSelectElement>(null);

  const tagsTasksList = useMemo(() => {
    return Array.from(new Set(tasks.map((task) => task.tag)));
  }, []);

  const onToggleDeadlineOrder = () => {
    dispatch(
      taskActionCreators.setFilters({
        deadline: deadline === 'asc' ? 'desc' : 'asc'
      })
    );
  };

  const onCompleteMarkChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      taskActionCreators.setFilters({
        completeMark: e.target.value
      })
    );
  };

  const onTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      taskActionCreators.setFilters({
        tag: e.target.value
      })
    );
  };

  const resetFilters = () => {
    dispatch(
      taskActionCreators.setFilters({
        deadline: null,
        tag: '',
        completeMark: ''
      })
    );

    if (tagSelectRef.current) {
      tagSelectRef.current.value = '';
    }

    if (checkboxRef.current) {
      checkboxRef.current.value = '';
    }
  };

  useEffect(() => {
    setFilterActive(Boolean(deadline) || Boolean(tag) || Boolean(completeMark));
  }, [deadline, tag, completeMark]);

  return (
    <div className={styles.TaskFilterPanel}>
      <div className={styles.taskFilterSection}>
        <div className={`${styles.taskFilter} ${styles.checkboxFilter}`}>
          <select ref={checkboxRef} onChange={onCompleteMarkChange}>
            <option value=''></option>
            <option value='true'>on</option>
            <option value='false'>off</option>
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
          onClick={onToggleDeadlineOrder}
        >
          {deadline === 'asc' ? <ArrowUpFilter /> : <ArrowDownFilter />}
        </div>
        <div className={`${styles.taskFilter} ${styles.tagFilter}`}>
          <select ref={tagSelectRef} onChange={onTagChange}>
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
