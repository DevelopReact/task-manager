import * as yup from 'yup';

export const tagsValidationSchema = yup.object().shape({
  tag: yup.string().required('this field is required')
});
