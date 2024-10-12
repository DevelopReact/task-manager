// react
import { FC } from 'react';
//assets
import Preloader from '../../libs/assets/svg/Preloader.svg?react';
// styles
import styles from './Loader.module.scss';

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className={styles.Loader}>
      <Preloader />
    </div>
  );
};
