import { makeRequest } from './makeRequest';

export interface ResponseItem {
  timestamp: number;
  price: number;
  xCoordinate: number;
  yCoordinate: number;
}

export const getDayStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'day',
  });

  return response;
};

export const getWeekStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'week',
  });

  return response;
};

export const getMonthStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'month',
  });

  return response;
};

export const getYearStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'year',
  });

  return response;
};
