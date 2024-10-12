// react
import { FC, ReactNode } from 'react';
//lib
import classNames from 'classnames';
// styles
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  backgroundColor: 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  backgroundColor,
  disabled,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classNames(styles.Button, {
        [styles.submit]: backgroundColor === 'submit',
        [styles.reset]: backgroundColor === 'reset',
        [styles.disabled]: disabled
      })}
    >
      {children}
    </button>
  );
};
