//react
import { ReactElement, useState } from 'react';
//providers
import { TaskPanelsContext } from './TaskPanelsContext';

type Props = {
  children: ReactElement;
};

export const TaskPanelsProvider = ({ children }: Props) => {
  const [showTaskCardPanel, setShowTaskCardPanel] = useState<boolean>(false);

  const [currentEditableTaskId, setCurrentEditableTaskId] = useState(0);

  return (
    <TaskPanelsContext.Provider
      value={{
        showTaskCardPanel,
        setShowTaskCardPanel,
        currentEditableTaskId,
        setCurrentEditableTaskId
      }}
    >
      {children}
    </TaskPanelsContext.Provider>
  );
};
