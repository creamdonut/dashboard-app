import { Point } from 'entities/Point';
import { getLastElementIdx } from 'shared/lib/getLastElementIdx';
import { FIRST_ELEMENT } from '../model/consts';

export const getX = (data: Point[]) => {
  const lastElementIdx = getLastElementIdx(data);

  return {
    min: data[FIRST_ELEMENT].xCoordinate,
    max: data[lastElementIdx].xCoordinate,
  };
};
