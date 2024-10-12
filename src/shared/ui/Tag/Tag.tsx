// react
import { FC, ReactNode } from 'react';
//libs
import classNames from 'classnames';
// styles
import styles from './Tag.module.scss';

interface TagProps {
  children: ReactNode;
  backgroundColor: string;
  onClick?: () => void;
  active?: boolean;
}

export const Tag: FC<TagProps> = ({
  children,
  backgroundColor,
  onClick,
  active
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.Tag, {
        [styles.sketchBC]: backgroundColor === 'sketch',
        [styles.spotifyBC]: backgroundColor === 'spotify',
        [styles.dribbleBC]: backgroundColor === 'dribble',
        [styles.behanceBC]: backgroundColor === 'behance',
        [styles.uxBC]: backgroundColor === 'ux',
        [styles.active]: active
      })}
    >
      {children}
    </div>
  );
};
