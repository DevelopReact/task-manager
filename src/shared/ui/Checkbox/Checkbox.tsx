// react
import { FC } from 'react';
//libs
import classNames from 'classnames';
//assets
import Shape from '../../libs/assets/svg/Shape.svg?react';
// styles
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  active: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.Checkbox, {
        [styles.active]: active
      })}
    >
      {active && <Shape />}
    </div>
  );
};
