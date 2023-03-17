import dayjs from 'dayjs';

import { getY } from '../lib/getY';
import { FIRST_ELEMENT } from './consts';

import { Point } from 'entities/Point';
import { getLastElementIdx } from 'shared/lib/getLastElementIdx';

export const useLineChartLabels = (data: Point[], dateFormat?: string) => {
  const { min, max } = getY(data);

  const lastElementIdx = getLastElementIdx(data);

  const startDate =
    data[FIRST_ELEMENT].timestamp &&
    dayjs(data[FIRST_ELEMENT].timestamp * 1000).format(dateFormat);

  const endDate = dayjs((data[lastElementIdx].timestamp || 0) * 1000).format(
    dateFormat
  );

  return { startDate, endDate, min, max };
};
