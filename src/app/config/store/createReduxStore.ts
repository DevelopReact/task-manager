import { tagReducer } from '@/entities/tags/model/reducer/tagReducer';
import { taskReducer } from '@/entities/tasks/model/reducer/taskReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk as thunkMiddlware } from 'redux-thunk';

export const createReduxStore = () => {
  const reducers = {
    task: taskReducer,
    tag: tagReducer
  };

  const rootReducer = combineReducers(reducers);
  // @ts-expect-error
  const store = createStore(rootReducer, applyMiddleware(thunkMiddlware));

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
