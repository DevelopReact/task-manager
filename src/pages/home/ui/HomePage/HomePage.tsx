// react
import { FC } from 'react';
//ui
import { HomeTasks } from '../HomeTasks';
import { HomeAddTaskPanel } from '../HomeAddTaskPanel';
import { TaskCard } from '@/entities/tasks/ui';
// styles
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <HomeAddTaskPanel />
      <div className={styles.HomePageContent}>
        <HomeTasks />
        <TaskCard />
      </div>
    </div>
  );
};
