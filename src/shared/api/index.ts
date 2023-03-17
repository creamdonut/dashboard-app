import { makeRequest } from './makeRequest';

export interface ApiResponse {
  price_change: number;
  prices: number[][];
  usd_price_change: number;
}

export const getHourStatistics = async () => {
  try {
    const response = await makeRequest<ApiResponse>({
      url: 'h/toncoin',
    });

    return response;
  } catch (error) {
    return null;
  }
};

export const getDayStatistics = async () => {
  try {
    const response = await makeRequest<ApiResponse>({
      url: 'd/toncoin',
    });

    return response;
  } catch (error) {
    return null;
  }
};

export const getWeekStatistics = async () => {
  try {
    const response = await makeRequest<ApiResponse>({
      url: 'w/toncoin',
    });

    return response;
  } catch (error) {
    return null;
  }
};

export const getMonthStatistics = async () => {
  try {
    const response = await makeRequest<ApiResponse>({
      url: 'm/toncoin',
    });

    return response;
  } catch (error) {
    return null;
  }
};
