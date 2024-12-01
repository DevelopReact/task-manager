// react
import { FC } from 'react';
//assets
import illustrationImg from '@/shared/libs/assets/png/illustration.png';
// styles
import styles from './Illustration.module.scss';

interface IllustrationProps {}

export const Illustration: FC<IllustrationProps> = ({}) => {
  return (
    <div className={styles.Illustration}>
      <img src={illustrationImg} alt='illustration' />
    </div>
  );
};
