import { Dispatch } from 'redux';
import { TagActions } from '../types/tagActions';
import { tagActionCreators } from '../actionCreators/tagactionCreators';

import { tagServices } from '../services/tagServices';

export const getTags = (dispatch: Dispatch<TagActions>) => {
  dispatch(tagActionCreators.setIsLoading(true));

  tagServices
    .getTags()
    .then(({ data }) => {
      dispatch(tagActionCreators.setTags(data));
    })
    .catch((error) => {
      dispatch(tagActionCreators.setError(error.message));
    })
    .finally(() => {
      dispatch(tagActionCreators.setIsLoading(false));
    });
};
