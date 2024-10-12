//react-redux
import { useDispatch as useReduxDispatch } from 'react-redux';
//store
import { AppDispatch } from '@/app/config/store/createReduxStore';

export const useDispatch = () => {
  return useReduxDispatch<AppDispatch>();
};
