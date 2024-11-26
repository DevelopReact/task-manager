// react
import { FC } from 'react';
import { useForm } from 'react-hook-form';
//lib
import { yupResolver } from '@hookform/resolvers/yup';
//thunks
import { authorizationUser } from '@/entities/user/model/thunks/userThunks';
//libs
import { userLogInSchema } from '../../libs/validationSchemas';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//types
import { IUser } from '@/entities/user/model/types/userTypes';
//ui
import { Button, Error, Input } from '@/shared/ui';
// styles
import styles from './UserLogIn.module.scss';

interface UserLogInProps {
  error: string;
}

export const UserLogIn: FC<UserLogInProps> = ({ error }) => {
  const dispatch = useDispatch();

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    reset
  } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(userLogInSchema)
  });

  const onSubmitFormClick = (data: Omit<IUser, 'name'>) => {
    dispatch(authorizationUser(data));
    reset();
  };

  return (
    <form
      className={styles.UserLogIn}
      onSubmit={handleSubmit(onSubmitFormClick)}
    >
      <h2>Log In</h2>
      <div className={styles.inputWrapper}>
        <Input
          type='email'
          placeholder='email'
          register={register('email')}
          error={errors.email}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type='password'
          placeholder='password'
          register={register('password')}
          error={errors.password}
        />
      </div>
      {error && <Error error={error} />}
      <Button type='submit' backgroundColor='submit' disabled={!isValid}>
        Log In
      </Button>
    </form>
  );
};
