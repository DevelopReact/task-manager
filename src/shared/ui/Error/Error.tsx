// react
import { FC } from 'react';
// styles
import styles from './Error.module.scss';

interface ErrorProps {
  error: string;
}

export const Error: FC<ErrorProps> = ({ error }) => {
  return <div className={styles.Error}>{error}</div>;
};
