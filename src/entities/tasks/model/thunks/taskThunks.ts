//redux
import { Dispatch } from 'redux';
//store
import { AppDispatch } from '@/app/config/store/createReduxStore';
import { StateSchema } from '@/app/config/store/stateSchema';
//actions
import { TaskActions } from '../types/taskActions';
import { taskActionCreators } from '../actionCreators/taskActionCreators';
//selectors
import { getMetaState, getTaskFilters } from '../selectors/taskSelectors';
//services
import { taskServices } from '../services/taskServices';

export const getTasks =
  (filters: Parameters<typeof taskServices.getTasks>[0], page: number) =>
  (dispatch: Dispatch<TaskActions>) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    taskServices
      .getTasks(filters, page)
      .then(({ data }) => {
        dispatch(taskActionCreators.setMeta(data.meta));
        dispatch(taskActionCreators.setTasks(data.items));
        dispatch(taskActionCreators.setError(''));
        if (data.items.length) {
          dispatch(taskActionCreators.setIsSuccess(true));
        }
      })
      .catch((error) => {
        dispatch(taskActionCreators.setError(error.message));
      })
      .finally(() => {
        dispatch(taskActionCreators.setIsLoading(false));
      });
  };

export const createTask = (
  task: Parameters<typeof taskServices.createTask>[0]
) => {
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    const filters = getTaskFilters(getState());
    const { current_page } = getMetaState(getState());

    taskServices
      .createTask({
        ...task,
        isComplete: task.isComplete === undefined ? false : task.isComplete
      })
      .then(() => {
        dispatch(getTasks(filters, current_page));
        dispatch(taskActionCreators.setIsSuccess(true));
      })
      .catch((error) => {
        dispatch(taskActionCreators.setError(error.message));
      })
      .finally(() => {
        dispatch(taskActionCreators.setIsLoading(false));
      });
  };
};

export const updateTask = (
  task: Parameters<typeof taskServices.updateTask>[0]
) => {
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    const filters = getTaskFilters(getState());
    const { current_page } = getMetaState(getState());

    taskServices
      .updateTask(task)
      .then(() => {
        dispatch(getTasks(filters, current_page));
        dispatch(taskActionCreators.setIsSuccess(true));
      })
      .catch((error) => {
        dispatch(taskActionCreators.setError(error.message));
      })
      .finally(() => {
        dispatch(taskActionCreators.setIsLoading(false));
      });
  };
};

export const deleteTask = (
  id: Parameters<typeof taskServices.deleteTask>[0]
) => {
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    const filters = getTaskFilters(getState());
    const { current_page } = getMetaState(getState());

    taskServices
      .deleteTask(id)
      .then(() => {
        dispatch(getTasks(filters, current_page));
        dispatch(taskActionCreators.setIsSuccess(true));
      })
      .catch((error) => {
        dispatch(taskActionCreators.setError(error.message));
      })
      .finally(() => {
        dispatch(taskActionCreators.setIsLoading(false));
      });
  };
};
