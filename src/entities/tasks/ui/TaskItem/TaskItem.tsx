// react
import { FC, useContext, useState } from 'react';
//providers
import { TaskPanelsContext } from '@/app/provider/context/TaskPanelsContext';
//thunks
import { deleteTask, updateTask } from '../../model/thunks/taskThunks';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//ui
import { Checkbox, Tag } from '@/shared/ui';
//assets
import CancelIcon from '@/shared/libs/assets/svg/cancel-icon.svg?react';
// styles
import styles from './TaskItem.module.scss';

interface TaskItemProps {
  id: number;
  isComplete: boolean;
  title: string;
  deadline: string;
  tag: string;
  description: string;
}

export const TaskItem: FC<TaskItemProps> = ({
  id,
  title,
  deadline,
  tag,
  isComplete
}) => {
  const dispatch = useDispatch();
  const { setCurrentEditableTaskId, setShowTaskCardPanel } =
    useContext(TaskPanelsContext);

  const [showCancelButton, setShowCancelButton] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowCancelButton(!showCancelButton);
  };
  const handleMouseLeave = () => {
    setShowCancelButton(!showCancelButton);
  };

  const onCheckBoxClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();

    dispatch(
      updateTask({
        updatedTaskId: id,
        updatedFields: {
          isComplete: !isComplete
        }
      })
    );
  };

  const deleteProduct = (e: React.MouseEvent, taskId: number) => {
    e.stopPropagation();

    dispatch(deleteTask(taskId));

    setCurrentEditableTaskId(0);
    setShowTaskCardPanel(false);
  };

  const onOpenPanelClick = () => {
    setCurrentEditableTaskId(id);
    setShowTaskCardPanel(true);
  };

  return (
    <div
      className={styles.TaskItem}
      onClick={onOpenPanelClick}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {showCancelButton && (
        <div
          className={styles.cancelButton}
          onClick={(e) => deleteProduct(e, id!)}
        >
          <CancelIcon />
        </div>
      )}
      <div className={styles.taskItemSection}>
        <Checkbox
          active={isComplete}
          onClick={(e: React.MouseEvent) => onCheckBoxClick(e, id!)}
        />
        {title}
      </div>
      <div className={styles.taskItemSection}>
        {new Intl.DateTimeFormat('uk-UA').format(new Date(deadline))}
        {<Tag backgroundColor={tag} children={tag} />}
      </div>
    </div>
  );
};
