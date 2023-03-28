import dayjs from 'dayjs';

import { Labels } from '../model';

import { DEFAULT_DATE_FORMAT, FIRST_ELEMENT } from 'entities/consts';
import { Point } from 'entities/Point';
import { getLastElementIdx } from 'shared/lib/getLastElementIdx';
import { getY } from 'shared/LineChart/lib/getY';

export const xLabelsAdapter = (
  fetchedData: Point[],
  setLabel: (value: Labels) => void
) => {
  if (fetchedData.length === 0) return;

  const lastElementIdx = getLastElementIdx(fetchedData);

  const xLabelMin = dayjs(fetchedData[FIRST_ELEMENT].timestamp).format(
    DEFAULT_DATE_FORMAT
  );

  const xLabelMax = dayjs(fetchedData[lastElementIdx].timestamp || 0).format(
    DEFAULT_DATE_FORMAT
  );

  setLabel({ max: xLabelMax, center: 'time', min: xLabelMin });
};
export const yLabelsAdapter = (
  fetchedData: Point[],
  setLabel: (value: Labels) => void
) => {
  if (fetchedData.length === 0) return;

  const { min, max } = getY(fetchedData);
  const yLabelMin = `$${min.toFixed(4)}`;
  const yLabelMax = `$${max.toFixed(4)}`;

  setLabel({ max: yLabelMax, center: 'price', min: yLabelMin });
};
