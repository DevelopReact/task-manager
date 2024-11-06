// react
import { FC, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
//lib
import { yupResolver } from '@hookform/resolvers/yup';
//providers
import { TaskPanelsContext } from '@/app/provider/context/TaskPanelsContext';
//thunks
import { createTask, updateTask } from '../../model/thunks/taskThunks';
//selectors
import { getTaskById } from '../../model/selectors/taskSelectors';
//types
import { CreateTaskRequest } from '../../model/types/tasksServicesTypes';
//ui
import { Button, Input } from '@/shared/ui';
import { Tags } from '../../../tags/ui/Tags/Tags';
import { TaskCompleteMark } from '../TaskCompleteMark/TaskCompleteMark';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//lib
import { taskCardSchema } from './libs/validationSchemas/taskCardSchema';
// styles
import styles from './TaskCard.module.scss';

interface TaskCardProps {}

export const TaskCard: FC<TaskCardProps> = ({}) => {
  const {
    showTaskCardPanel,
    setShowTaskCardPanel,
    currentEditableTaskId,
    setCurrentEditableTaskId
  } = useContext(TaskPanelsContext);

  const currentEditableTask = useSelector(getTaskById(currentEditableTaskId));

  const dispatch = useDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    setValue
  } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(taskCardSchema)
  });

  useEffect(() => {
    if (!currentEditableTask) {
      onResetFormClick();
    }

    if (currentEditableTask) {
      setValue('tag', currentEditableTask.tag);
      setValue('title', currentEditableTask.title);
      setValue('deadline', currentEditableTask.deadline);
      setValue('description', currentEditableTask.description);
      setValue('isComplete', currentEditableTask.isComplete);
    }
  }, [currentEditableTask]);

  const onSubmitFormClick = (data: CreateTaskRequest) => {
    if (!currentEditableTask) {
      dispatch(createTask(data));
    }

    if (currentEditableTask) {
      dispatch(
        updateTask({
          updatedTaskId: currentEditableTask.id,
          updatedFields: data
        })
      );
      setCurrentEditableTaskId(0);
      setShowTaskCardPanel(false);
    }
    onResetFormClick();
    setShowTaskCardPanel(false);
  };

  const onResetFormClick = () => {
    setCheckCompleteMark(false);
    setSelectedTag('');
    reset();
  };
  const checkCompleteMark = watch('isComplete', false);

  const setCheckCompleteMark = (check: boolean) => {
    setValue('isComplete', check);
  };

  const selectedTag = watch('tag');

  const setSelectedTag = (tag: string) => {
    setValue('tag', tag);
  };

  return showTaskCardPanel ? (
    <div className={styles.TaskCard}>
      <div className={styles.markComplete}></div>
      <form
        className={styles.formTask}
        onSubmit={handleSubmit(onSubmitFormClick)}
      >
        <TaskCompleteMark
          checkCompleteMark={checkCompleteMark}
          setCheckCompleteMark={setCheckCompleteMark}
        />
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <Input
              type='text'
              register={register('title')}
              placeholder='New task'
              error={errors.title}
            />
          </div>
          <div className={styles.inputWrapper}>
            <p>Due to</p>
            <Input
              type='date'
              min={new Date().toISOString().split('T')[0]}
              register={register('deadline')}
              error={errors.deadline}
            />
          </div>
          <div className={styles.inputWrapper}>
            <p>Description</p>
            <Input
              type='text'
              placeholder='Describe your event'
              register={register('description')}
              error={errors.description}
            ></Input>
          </div>
          <Tags
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            error={errors.tag}
          />
          <div className={styles.formButton}>
            <Button
              type='reset'
              backgroundColor='reset'
              onClick={onResetFormClick}
            >
              Reset
            </Button>
            <Button type='submit' backgroundColor='submit'>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  ) : null;
};
