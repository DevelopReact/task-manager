export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  token: string;
  data: {
    id: number;
    name: string;
    email: string;
  };
}
