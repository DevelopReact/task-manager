export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserStateSchema {
  user: IUser;
  error: string;
  isLoading: boolean;
  isSuccess: boolean;
}
