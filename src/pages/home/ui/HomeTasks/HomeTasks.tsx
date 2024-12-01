// react
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
//thunks
import { getTasks } from '@/entities/tasks/model/thunks/taskThunks';
// actions
import { taskActionCreators } from '@/entities/tasks/model/actionCreators/taskActionCreators';
//selectors
import { getTaskState } from '@/entities/tasks/model/selectors/taskSelectors';
//ui
import { TaskFilterPanel, TasksList } from '@/entities/tasks/ui';
import { Error, Illustration, Loader } from '@/shared/ui';
//lib
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
import { Pagination } from '@/shared/ui/Pagination/Pagination';
// styles
import styles from './HomeTasks.module.scss';

interface HomeTasksProps {}

export const HomeTasks: FC<HomeTasksProps> = ({}) => {
  const dispatch = useDispatch();

  const { tasks, isLoading, isSuccess, error, filters, meta } =
    useSelector(getTaskState);

  useEffect(() => {
    dispatch(getTasks(filters, meta.current_page));
  }, [filters, meta.current_page]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!isSuccess || !tasks.length) {
    return <Illustration />;
  }

  const onPageChange = (page: number) => {
    dispatch(taskActionCreators.setMetaCurrentPage(page));
  };

  return (
    <div className={styles.HomeTasks}>
      <TaskFilterPanel tasks={tasks} />

      <Pagination
        countPages={meta.total_pages}
        pageNumber={meta.current_page}
        setPageNumber={onPageChange}
      />

      <TasksList tasks={tasks} />
    </div>
  );
};
