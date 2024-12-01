// react
import { FC } from 'react';
//actions
import { taskActionCreators } from '../../model/actionCreators/taskActionCreators';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//assets
import ArrowUpFilter from '@/shared/libs/assets/svg/arrow-up-filter.svg?react';
import ArrowDownFilter from '@/shared/libs/assets/svg/arrow-down-filter.svg?react';
// styles
import styles from './TaskFilterSortDeadline.module.scss';

interface TaskFilterSortDeadlineProps {
  deadline: 'asc' | 'desc' | null;
}

export const TaskFilterSortDeadline: FC<TaskFilterSortDeadlineProps> = ({
  deadline
}) => {
  const dispatch = useDispatch();

  const onToggleDeadlineOrder = () => {
    dispatch(
      taskActionCreators.setFilters({
        deadline: deadline === 'asc' ? 'desc' : 'asc'
      })
    );
  };

  return (
    <div className={styles.TaskFilterSortDeadline}>
      <div
        className={`${styles.taskFilter} ${styles.deadlineFilter}`}
        onClick={onToggleDeadlineOrder}
      >
        {deadline === 'asc' ? <ArrowUpFilter /> : <ArrowDownFilter />}
      </div>
    </div>
  );
};
