export interface IParamsLogin {
  account: string;
  password: string;
}

export interface IUserLoginResponse {
  id: number;
  account: string;
  name: string;
  roleName: string;
  leaderType: string;
}

export interface IDataLoginResponse {
  accessToken: string;
  refreshToken: string;
  userLogin: IUserLoginResponse;
}

export interface IResponseLogin {
  status: string;
  message: string;
  timestamp: string;
  pageResponse: any | null;
  data: IDataLoginResponse;
}

export interface ILoginError {
  status: string;
  message: string;
  timestamp: string;
  error: string;
}
