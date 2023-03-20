import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

export const makeRequest = async <R>(
  config: AxiosRequestConfig
): Promise<R> => {
  try {
    return (
      await axios.request<R>({
        baseURL: process.env.REACT_APP_BASE_BACKEND,
        ...config,
      })
    ).data;
  } catch (error) {
    return Promise.reject(error);
  }
};
