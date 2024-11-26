//api
import { mockapiInstance } from '@/shared/api/mockapiInstance';
//types
import { IUserRequest } from '../types/userServiceTypes';

class userService {
  async registerUser(user: IUserRequest) {
    return mockapiInstance.post('/register', user);
  }

  async authorizationUser(user: Omit<IUserRequest, 'name'>) {
    return mockapiInstance.post('/auth', user);
  }
}

export const userServices = new userService();
