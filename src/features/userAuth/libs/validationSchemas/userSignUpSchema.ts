import {
  userConfirmPasswordSchema,
  userEmailSchema,
  userNameSchema,
  userPasswordSchema
} from '@/shared/validationSchemas';

import * as yup from 'yup';

export const userSignUpSchema = yup.object().shape({
  name: userNameSchema.fields.name,
  email: userEmailSchema.fields.email,
  password: userPasswordSchema.fields.password,
  confirmPassword: userConfirmPasswordSchema.fields.confirmPassword
});
