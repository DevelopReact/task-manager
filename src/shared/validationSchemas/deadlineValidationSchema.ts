import * as yup from 'yup';

export const deadlineValidationSchema = yup.object().shape({
  deadline: yup.string().required('this field is required')
});
