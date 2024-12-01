//config
import { AppDispatch } from '@/app/config/store/createReduxStore';
//services
import { userServices } from '../services/userAuthServices';
//actions
import { userActionCreators } from '@/entities/user/model/actionCreators/userActionCreators';
//constants
import { JWT_TOKEN } from '@/shared/libs/constants/jwtToken';

export const registerUser = (
  user: Parameters<typeof userServices.registerUser>[0]
) => {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreators.setIsLoading(true));

    userServices
      .registerUser(user)
      .then((response) => {
        const { data, token } = response.data;
        dispatch(userActionCreators.setUser(data));
        dispatch(userActionCreators.setIsSuccess(true));
        dispatch(userActionCreators.setError(''));
        localStorage.setItem(JWT_TOKEN, token);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(
          userActionCreators.setError(
            error.response.data.message.split('_').join(' ').toLowerCase()
          )
        );
        dispatch(userActionCreators.setIsSuccess(false));
      })
      .finally(() => {
        dispatch(userActionCreators.setIsLoading(false));
      });
  };
};

export const authorizationUser = (
  user: Parameters<typeof userServices.authorizationUser>[0]
) => {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreators.setIsLoading(true));

    userServices
      .authorizationUser(user)
      .then((response) => {
        const { data, token } = response.data;
        dispatch(userActionCreators.setUser(data));
        dispatch(userActionCreators.setIsSuccess(true));
        dispatch(userActionCreators.setError(''));
        localStorage.setItem(JWT_TOKEN, token);
      })
      .catch((error) => {
        dispatch(
          userActionCreators.setError(
            error.response.data.message.split('_').join(' ').toLowerCase()
          )
        );
        dispatch(userActionCreators.setIsSuccess(false));
      })
      .finally(() => {
        dispatch(userActionCreators.setIsLoading(false));
      });
  };
};
