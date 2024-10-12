// react
import { FC, useContext } from 'react';
//providers
import { TaskPanelsContext } from '@/app/provider/context/TaskPanelsContext';
//assets
import AddIcon from '@/shared/libs/assets/svg/AddIcon.svg?react';
// styles
import styles from './HomeAddTaskPanel.module.scss';

interface HomeAddTaskPanelProps {}

export const HomeAddTaskPanel: FC<HomeAddTaskPanelProps> = ({}) => {
  const { setShowTaskCardPanel, showTaskCardPanel, setCurrentEditableTaskId } =
    useContext(TaskPanelsContext);

  const onToggleShowTaskPanel = () => {
    setShowTaskCardPanel(!showTaskCardPanel);
    setCurrentEditableTaskId(0);
  };

  return (
    <div className={styles.HomeAddTaskPanel}>
      <AddIcon onClick={onToggleShowTaskPanel} />
    </div>
  );
};
