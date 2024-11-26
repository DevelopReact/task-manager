//redux thunk persist
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk as thunkMiddlware } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//lib
import { composeWithDevTools } from '@redux-devtools/extension';
//reducers
import { tagReducer } from '@/entities/tags/model/reducer/tagReducer';
import { taskReducer } from '@/entities/tasks/model/reducer/taskReducer';
import { userReducer } from '@/entities/user/model/reducer/userReducer';

const persistConfig = {
  key: 'root',
  storage: storage
};

const reducers = {
  task: taskReducer,
  tag: tagReducer,
  user: persistReducer(persistConfig, userReducer)
};

const rootReducer = combineReducers<any>(reducers);

export const createReduxStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddlware))
  );

  const persistor = persistStore(store);

  return { store, persistor };
};

export type AppDispatch = ReturnType<
  typeof createReduxStore
>['store']['dispatch'];
