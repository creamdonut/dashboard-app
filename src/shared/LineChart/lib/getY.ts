import { FIRST_ELEMENT } from 'entities/consts';
import { Point } from 'entities/Point';

export const getY = (data: Point[]) => {
  return {
    min: data.reduce(
      (min, p) => (p.yCoordinate < min ? p.yCoordinate : min),
      data[FIRST_ELEMENT].yCoordinate
    ),
    max: data.reduce(
      (max, p) => (p.yCoordinate > max ? p.yCoordinate : max),
      data[FIRST_ELEMENT].yCoordinate
    ),
  };
};
