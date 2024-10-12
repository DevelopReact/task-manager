import * as yup from 'yup';
//libs
import {
  deadlineValidationSchema,
  descriptionTaskValidationSchema,
  tagsValidationSchema,
  taskTitleValidationSchema
} from '@/shared/validationSchemas';

export const taskCardSchema = yup.object().shape({
  title: taskTitleValidationSchema.fields.title,
  description: descriptionTaskValidationSchema.fields.description,
  deadline: deadlineValidationSchema.fields.deadline,
  tag: tagsValidationSchema.fields.tag
});
