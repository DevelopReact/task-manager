// react
import { FC } from 'react';
//actions
import { userActionCreators } from '@/entities/user/model/actionCreators/userActionCreators';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//ui
import { Button } from '@/shared/ui';
// styles
import styles from './HomeUserPanel.module.scss';

interface HomeUserPanelProps {
  showLogIn: boolean;
  setShowLogIn: (showLogIn: boolean) => void;
  showSignUp: boolean;
  setShowSignUp: (showSignUp: boolean) => void;
}

export const HomeUserPanel: FC<HomeUserPanelProps> = ({
  showLogIn,
  setShowLogIn,
  showSignUp,
  setShowSignUp
}) => {
  const dispatch = useDispatch();

  const onClickToggleLogIn = () => {
    dispatch(userActionCreators.setError(''));
    if (!showLogIn) {
      setShowLogIn(true);
      setShowSignUp(false);
    }
  };

  const onClickToggleSignUp = () => {
    dispatch(userActionCreators.setError(''));
    if (!showSignUp) {
      setShowSignUp(true);
      setShowLogIn(false);
    }
  };
  return (
    <div className={styles.HomeUserPanel}>
      <Button
        backgroundColor={showLogIn ? 'submit' : 'reset'}
        children='LogIn'
        type='button'
        onClick={onClickToggleLogIn}
      ></Button>
      <Button
        backgroundColor={showSignUp ? 'submit' : 'reset'}
        children='SignUp'
        type='button'
        onClick={onClickToggleSignUp}
      ></Button>
    </div>
  );
};
