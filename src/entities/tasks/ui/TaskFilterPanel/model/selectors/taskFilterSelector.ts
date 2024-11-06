import { stateSchema } from '@/app/config/store/stateSchema';

export const getTaskFilterState = (state: stateSchema) => state.tasksFiltered;
