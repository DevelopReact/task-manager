// react
import { FC } from 'react';
// styles
import styles from './TaskCompleteMark.module.scss';
import { Checkbox } from '@/shared/ui';

interface TaskCompleteMarkProps {
  checkCompleteMark: boolean;
  setCheckCompleteMark: (checkCompleteMark: boolean) => void;
}

export const TaskCompleteMark: FC<TaskCompleteMarkProps> = ({
  checkCompleteMark,
  setCheckCompleteMark
}) => {
  return (
    <div className={styles.CompleteMark}>
      <Checkbox
        active={checkCompleteMark}
        onClick={() => setCheckCompleteMark(!checkCompleteMark)}
      />

      <p>mark as complete</p>
    </div>
  );
};
