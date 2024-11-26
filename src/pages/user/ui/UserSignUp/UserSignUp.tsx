// react
import { FC } from 'react';
import { useForm } from 'react-hook-form';
//lib
import { yupResolver } from '@hookform/resolvers/yup';
//thunks
import { registerUser } from '@/entities/user/model/thunks/userThunks';
//libs
import { userSignUpSchema } from '../../libs/validationSchemas';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//ui
import { Button, Error, Input } from '@/shared/ui';
import { IUser } from '@/entities/user/model/types/userTypes';
// styles
import styles from './UserSignUp.module.scss';

interface UserSignUpProps {
  error: string;
}

export const UserSignUp: FC<UserSignUpProps> = ({ error }) => {
  const dispatch = useDispatch();

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    reset
  } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(userSignUpSchema)
  });

  const onSubmitFormClick = (data: IUser) => {
    const { confirmPassword, ...user } = data;
    dispatch(registerUser(user));
    reset();
  };

  return (
    <form
      className={styles.UserSignUp}
      onSubmit={handleSubmit(onSubmitFormClick)}
    >
      <h2>Sign Up</h2>
      <div className={styles.inputWrapper}>
        <Input
          type='text'
          placeholder='name'
          register={register('name')}
          error={errors.name}
        />
      </div>
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
      <div className={styles.inputWrapper}>
        <Input
          type='password'
          placeholder='confirm password'
          register={register('confirmPassword')}
          error={errors.confirmPassword}
        />
      </div>
      {error && <Error error={error} />}
      <Button type='submit' backgroundColor='submit' disabled={!isValid}>
        Sign Up
      </Button>
    </form>
  );
};
