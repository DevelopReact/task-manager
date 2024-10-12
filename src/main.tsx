import { createRoot } from 'react-dom/client';
//app
import App from './app/App.tsx';
//providers
import { StoreProvider } from './app/provider/store/StoreProvider.tsx';
import { TaskPanelsProvider } from './app/provider/context/TaskPanelsProvider.tsx';
//styles
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <TaskPanelsProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </TaskPanelsProvider>
);
