//react
// import { createReduxStore } from '@/app/config/store/createReduxStore';
import { FC, ReactNode } from 'react';
//react redux
import { Provider } from 'react-redux';
//redux persist
import { PersistGate } from 'redux-persist/integration/react';
//store
import { createReduxStore } from '@/app/config/store/createReduxStore';
//ui
import { Loader } from '@/shared/ui';

interface StoreProviderProps {
  children: ReactNode;
}

const { store, persistor } = createReduxStore();

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export const PersistProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <PersistGate loading={<Loader />} persistor={persistor}>
      {children}
    </PersistGate>
  );
};
