import {
  userEmailSchema,
  userPasswordSchema
} from '@/shared/validationSchemas';
import * as yup from 'yup';

export const userLogInSchema = yup.object().shape({
  email: userEmailSchema.fields.email,
  password: userPasswordSchema.fields.password
});
