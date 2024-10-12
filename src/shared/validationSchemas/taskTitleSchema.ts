import * as yup from 'yup';

export const taskTitleValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'min length 3 symbols')
    .max(40, 'max length 40 symbols')
    .required('*')
});
