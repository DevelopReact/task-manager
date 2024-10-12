// react
import { FC, HTMLInputTypeAttribute, useEffect } from 'react';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue
} from 'react-hook-form';
//lib
import classNames from 'classnames';
// styles
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  setValue?: UseFormSetValue<FieldValues>;
  min?: string;
  value?: string;
  error?: {
    message?: string;
  };
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  error,
  register,
  min,
  setValue,
  value
}) => {
  useEffect(() => {
    if (setValue && value) {
      setValue(register?.name!, value, { shouldValidate: true });
    }
  }, [value, setValue, register]);

  return (
    <>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        min={min}
        className={classNames(styles.Input, {
          [styles.errorInput]: error
        })}
      />
      {error && <span>{error.message}</span>}
    </>
  );
};
