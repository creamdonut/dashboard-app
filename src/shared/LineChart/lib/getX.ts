import { FIRST_ELEMENT } from 'entities/consts';
import { Point } from 'entities/Point';
import { getLastElementIdx } from 'shared/lib/getLastElementIdx';

export const getX = (data: Point[]) => {
  const lastElementIdx = getLastElementIdx(data);

  return {
    min: data[FIRST_ELEMENT].xCoordinate,
    max: data[lastElementIdx].xCoordinate,
  };
};
