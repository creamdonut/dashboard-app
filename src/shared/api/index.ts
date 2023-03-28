import { DAY_MOCK } from 'shared/mock/day';
import { MONTH_MOCK } from 'shared/mock/month';
import { WEEK_MOCK } from 'shared/mock/week';
import { YEAR_MOCK } from 'shared/mock/year';
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

  return response || DAY_MOCK;
};

export const getWeekStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'week',
  });

  return response || WEEK_MOCK;
};

export const getMonthStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'month',
  });

  return response || MONTH_MOCK;
};

export const getYearStatistics = async () => {
  const response = await makeRequest<ResponseItem[]>({
    url: 'year',
  });

  return response || YEAR_MOCK;
};
