// react
import { ChangeEvent, FC, RefObject } from 'react';
//actions
import { taskActionCreators } from '../../model/actionCreators/taskActionCreators';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
// styles
import styles from './TaskFilterCompleteMark.module.scss';

interface TaskFilterCompleteMarkProps {
  checkboxRef: RefObject<HTMLSelectElement>;
}

export const TaskFilterCompleteMark: FC<TaskFilterCompleteMarkProps> = ({
  checkboxRef
}) => {
  const dispatch = useDispatch();

  const onCompleteMarkChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      taskActionCreators.setFilters({
        completeMark: e.target.value
      })
    );
    dispatch(taskActionCreators.setMetaCurrentPage(1));
  };

  return (
    <div className={styles.TaskFilterCompleteMark}>
      <div className={styles.taskFilterSection}>
        <div className={`${styles.taskFilter} ${styles.checkboxFilter}`}>
          <select ref={checkboxRef} onChange={onCompleteMarkChange}>
            <option value=''></option>
            <option value='true'>on</option>
            <option value='false'>off</option>
          </select>
        </div>
      </div>
    </div>
  );
};
