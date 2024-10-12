import { Reducer } from 'redux';
import { TagStateSchema } from '../types/tagTypes';
import { TagActions } from '../types/tagActions';
import { TagActionTypes } from '../actionTypes/tagActionTypes';

const initialState: TagStateSchema = {
  error: '',
  isLoading: false,
  tags: []
};

export const tagReducer: Reducer<TagStateSchema, TagActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TagActionTypes.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case TagActionTypes.SET_TAGS: {
      return { ...state, tags: action.payload };
    }

    case TagActionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
