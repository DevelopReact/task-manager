// react
import { FC, useContext } from 'react';
//providers
import { TaskPanelsContext } from '@/app/provider/context/TaskPanelsContext';
//actions
import { userActionCreators } from '@/entities/user/model/actionCreators/userActionCreators';
//types
import { IUser } from '@/entities/user/model/types/userTypes';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//assets
import AddIcon from '@/shared/libs/assets/svg/AddIcon.svg?react';
import LogOut from '@/shared/libs/assets/svg/logout.svg?react';
//constants
import { JWT_TOKEN } from '@/shared/libs/constants/jwtToken';
// styles
import styles from './HomeHeader.module.scss';

interface HomeHeaderProps {
  user: IUser;
  isSuccess: boolean;
}

export const HomeHeader: FC<HomeHeaderProps> = ({ user, isSuccess }) => {
  const dispatch = useDispatch();
  const { setShowTaskCardPanel, showTaskCardPanel, setCurrentEditableTaskId } =
    useContext(TaskPanelsContext);

  const onToggleShowTaskPanel = () => {
    setShowTaskCardPanel(!showTaskCardPanel);
    setCurrentEditableTaskId(0);
  };

  const onClickLogOutUser = () => {
    dispatch(
      userActionCreators.setUser({
        id: 0,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    );
    dispatch(userActionCreators.setIsSuccess(false));

    localStorage.removeItem(JWT_TOKEN);
  };

  return (
    <div className={styles.HomeHeader}>
      <AddIcon onClick={onToggleShowTaskPanel} />
      {isSuccess && (
        <div className={styles.UserTaskPanel}>
          |
          <LogOut onClick={onClickLogOutUser} />
          <span>{user.name}</span>
        </div>
      )}
    </div>
  );
};
