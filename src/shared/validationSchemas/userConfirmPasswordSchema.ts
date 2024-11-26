//lib
import * as yup from 'yup';

const tooShortMessage = 'min length — ${min} symbol';
const tooLongMessage = 'max length — ${max} symbol';

export const userConfirmPasswordSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .min(5, tooShortMessage)
    .max(16, tooLongMessage)
    .oneOf([yup.ref('password')], 'Passwords must match')
});
