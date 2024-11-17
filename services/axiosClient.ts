import { ENTRYPOINT } from '@/shared/constants/entrypoint';
import { IParamsLogin, IResponseLogin } from '@/shared/types/auth';
import axios, { AxiosError, AxiosInstance } from 'axios';

/** Setting timeout of axios */
const AXIOS_TIMEOUT: number = 10000;

const BASE_URL: string = process.env.EXPO_PUBLIC_API_URL || '';

class AxiosClient {
  private axios: AxiosInstance;
  public exception: AxiosError | undefined;
  private config = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  };

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: AXIOS_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.axios.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  // api login
  apiLogin(params: IParamsLogin) {
    return this.axios.post<IResponseLogin>(ENTRYPOINT.login, params);
  }
}

export default new AxiosClient();
