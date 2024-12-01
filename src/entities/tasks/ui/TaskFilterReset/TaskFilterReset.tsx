// react
import { FC, RefObject } from 'react';
// styles
import styles from './TaskFilterReset.module.scss';
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
import { taskActionCreators } from '../../model/actionCreators/taskActionCreators';

import FilterOnIcon from '@/shared/libs/assets/svg/filter-on-icon.svg?react';
import FilterOffIcon from '@/shared/libs/assets/svg/filter-off-icon.svg?react';

interface TaskFilterResetProps {
  filterActive: boolean;
  checkboxRef: RefObject<HTMLSelectElement>;
  tagSelectRef: RefObject<HTMLSelectElement>;
}

export const TaskFilterReset: FC<TaskFilterResetProps> = ({
  filterActive,
  checkboxRef,
  tagSelectRef
}) => {
  const dispatch = useDispatch();

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
  return (
    <div className={styles.TaskFilterReset}>
      <div
        className={`${styles.taskFilter} ${styles.titleFilter}`}
        onClick={resetFilters}
      >
        {filterActive ? <FilterOffIcon /> : <FilterOnIcon />}
      </div>
    </div>
  );
};
