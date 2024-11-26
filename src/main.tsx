import { createRoot } from 'react-dom/client';
//app
import App from './app/App.tsx';
//providers
import {
  PersistProvider,
  StoreProvider
} from './app/provider/store/StoreProvider.tsx';
import { TaskPanelsProvider } from './app/provider/context/TaskPanelsProvider.tsx';
//styles
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <PersistProvider>
      <TaskPanelsProvider>
        <App />
      </TaskPanelsProvider>
    </PersistProvider>
  </StoreProvider>
);
