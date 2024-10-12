// react
import { FC } from 'react';
//libs
import classNames from 'classnames';
//assets
import Checkbox from '@/shared/libs/assets/svg/Checkbox.svg?react';
// styles
import styles from './CompleteMark.module.scss';

interface CompleteMarkProps {
  checkCompleteMark: boolean;
  setCheckCompleteMark: (checkCompleteMark: boolean) => void;
}

export const CompleteMark: FC<CompleteMarkProps> = ({
  checkCompleteMark,
  setCheckCompleteMark
}) => {
  return (
    <div className={styles.CompleteMark}>
      <div
        onClick={() => setCheckCompleteMark(!checkCompleteMark)}
        className={classNames(styles.checkbox, {
          [styles.active]: checkCompleteMark
        })}
      >
        <Checkbox />
      </div>

      <p>mark as complete</p>
    </div>
  );
};
