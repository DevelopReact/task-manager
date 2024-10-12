import * as yup from 'yup';

export const descriptionTaskValidationSchema = yup.object().shape({
  description: yup
    .string()
    .min(3, 'min length 3 symbols')
    .max(40, 'max length 200 symbols')
    .required('*')
});
