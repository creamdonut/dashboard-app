import { Point } from 'entities/Point';
import { FIRST_ELEMENT } from '../model/consts';

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
