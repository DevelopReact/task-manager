//react
import { createContext } from 'react';
//types
import { ITask } from '@/entities/tasks/model/types/taskTypes';

export interface TaskPanelsContextType {
  setShowTaskCardPanel: (showTaskCardPanel: boolean) => void;
  showTaskCardPanel: boolean;
  currentEditableTaskId: ITask['id'];
  setCurrentEditableTaskId: (id: ITask['id']) => void;
}

export const TaskPanelsContext = createContext({} as TaskPanelsContextType);
