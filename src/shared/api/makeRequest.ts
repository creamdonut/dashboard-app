import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

export const makeRequest = async <R>(
  config: AxiosRequestConfig
): Promise<R> => {
  try {
    return (
      await axios.request<R>({
        baseURL: 'https://price-api.crypto.com/price/v2',
        ...config,
      })
    ).data;
  } catch (error) {
    return Promise.reject(error);
  }
};
