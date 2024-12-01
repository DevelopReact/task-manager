// react
import { FC, useState } from 'react';
//react-redux
import { useSelector } from 'react-redux';
//selectors
import { getUserState } from '@/entities/user/model/selectors/userSelectors';
//ui
import { HomeTasks } from '../HomeTasks';
import { HomeHeader } from '../HomeHeader';
import { TaskCard } from '@/entities/tasks/ui';
import { Loader } from '@/shared/ui';
import { HomeUserPanel } from '../HomeUserPanel';
import { UserLogIn, UserSignUp } from '@/features/userAuth/ui';
// styles
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const { user, isLoading, error, isSuccess } = useSelector(getUserState);

  return (
    <div className={styles.HomePage}>
      {isSuccess && <HomeHeader user={user} isSuccess={isSuccess} />}
      {!isSuccess && (
        <HomeUserPanel
          showLogIn={showLogIn}
          setShowLogIn={setShowLogIn}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
      )}
      <div className={styles.HomePageContent}>
        {isLoading && <Loader />}
        {!isSuccess && showLogIn && <UserLogIn error={error} />}
        {!isSuccess && showSignUp && <UserSignUp error={error} />}
        {isSuccess && <HomeTasks />}
        {isSuccess && <TaskCard />}
      </div>
    </div>
  );
};
