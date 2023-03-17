import { Point } from 'entities/Point';
import { getX } from './getX';

export const getSvgX = (
  x: number,
  yLabelSize: number,
  svgWidth: number,
  data: Point[]
) => {
  return yLabelSize + (x / getX(data).max) * (svgWidth - yLabelSize);
};
