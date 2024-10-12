// react
import { FC, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
//thunks
import { getTasks } from '@/entities/tasks/model/thunks/taskThunks';
//selectors
import { getTaskState } from '@/entities/tasks/model/selectors/taskSelectors';
//ui
import { TasksList } from '@/entities/tasks/ui';
import { Error, Loader } from '@/shared/ui';
import { Illustration } from '@/widgets/ui';
//lib
import { useDispatch } from '@/shared/libs/hooks/useDispatch';

interface HomeTasksProps {}

export const HomeTasks: FC<HomeTasksProps> = ({}) => {
  const { tasks, isLoading, isSuccess, error } = useSelector(getTaskState);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getTasks);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!isSuccess || !tasks.length) {
    return <Illustration />;
  }

  return <TasksList tasks={tasks} />;
};
