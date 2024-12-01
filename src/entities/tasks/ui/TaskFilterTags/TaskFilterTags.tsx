// react
import { ChangeEvent, FC, RefObject } from 'react';
//actions
import { taskActionCreators } from '../../model/actionCreators/taskActionCreators';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
// styles
import styles from './TaskFilterTags.module.scss';

interface TaskFilterTagsProps {
  tagsTasksList: string[];
  tagSelectRef: RefObject<HTMLSelectElement>;
}

export const TaskFilterTags: FC<TaskFilterTagsProps> = ({
  tagsTasksList,
  tagSelectRef
}) => {
  const dispatch = useDispatch();

  const onTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      taskActionCreators.setFilters({
        tag: e.target.value
      })
    );
    dispatch(taskActionCreators.setMetaCurrentPage(1));
  };

  return (
    <div className={styles.TaskFilterTags}>
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
  );
};
