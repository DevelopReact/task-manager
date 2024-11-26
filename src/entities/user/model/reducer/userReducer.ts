import { Reducer } from 'redux';
//types
import { UserStateSchema } from '../types/userTypes';
import { UserActions } from '../types/userActions';
import { UserActionTypes } from '../actionTypes/userActionTypes';

const initialState: UserStateSchema = {
  error: '',
  isLoading: false,
  isSuccess: false,
  user: {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
};

export const userReducer: Reducer<UserStateSchema, UserActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case UserActionTypes.SET_USER: {
      return { ...state, user: action.payload };
    }

    case UserActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case UserActionTypes.SET_IS_SUCCESS: {
      return { ...state, isSuccess: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
