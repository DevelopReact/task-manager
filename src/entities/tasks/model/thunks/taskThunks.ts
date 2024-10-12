//redux
import { Dispatch } from 'redux';
//store
import { AppDispatch } from '@/app/config/store/createReduxStore';
//actions
import { TaskActions } from '../types/taskActions';
import { taskActionCreators } from '../actionCreators/taskActionCreators';
//services
import { taskServices } from '../services/taskServices';

export const getTasks = (dispatch: Dispatch<TaskActions>) => {
  dispatch(taskActionCreators.setIsLoading(true));
  dispatch(taskActionCreators.setIsSuccess(false));

  taskServices
    .getTasks()
    .then(({ data }) => {
      dispatch(taskActionCreators.setTasks(data));
      if (data.length) {
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
  return (dispatch: AppDispatch) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    taskServices
      .createTask(task)
      .then(() => {
        dispatch(getTasks);
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
  return (dispatch: AppDispatch) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    taskServices
      .updateTask(task)
      .then(() => {
        dispatch(getTasks);
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
  return (dispatch: AppDispatch) => {
    dispatch(taskActionCreators.setIsLoading(true));
    dispatch(taskActionCreators.setIsSuccess(false));

    taskServices
      .deleteTask(id)
      .then(() => {
        dispatch(getTasks);
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
