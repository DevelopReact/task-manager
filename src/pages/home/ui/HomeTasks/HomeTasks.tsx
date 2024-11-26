// react
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//thunks
import { getTasks } from '@/entities/tasks/model/thunks/taskThunks';
//selectors
import {
  getMetaState,
  getTaskState
} from '@/entities/tasks/model/selectors/taskSelectors';
//ui
import { TaskFilterPanel, TasksList } from '@/entities/tasks/ui';
import { Error, Loader } from '@/shared/ui';
import { Illustration } from '@/widgets/ui';
//lib
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
import { Pagination } from '@/shared/ui/Pagination/Pagination';
// styles
import styles from './HomeTasks.module.scss';

interface HomeTasksProps {}

export const HomeTasks: FC<HomeTasksProps> = ({}) => {
  const dispatch = useDispatch();

  const { tasks, isLoading, isSuccess, error, filters } =
    useSelector(getTaskState);

  const [pageNumber, setPageNumber] = useState<number>(1);

  const { total_pages } = useSelector(getMetaState(pageNumber));

  useEffect(() => {
    dispatch(getTasks(filters, pageNumber));
  }, [filters, pageNumber]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!isSuccess || !tasks.length) {
    return <Illustration />;
  }

  return (
    <div className={styles.HomeTasks}>
      <TaskFilterPanel tasks={tasks} />

      <Pagination
        countPages={total_pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

      <TasksList tasks={tasks} />
    </div>
  );
};
