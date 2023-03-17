import { Point } from 'entities/Point';
import { getY } from './getY';

export const getSvgY = (
  y: number,
  xLabelSize: number,
  svgHeight: number,
  data: Point[]
) => {
  const gY = getY(data);

  return (
    ((svgHeight - xLabelSize) * gY.max - (svgHeight - xLabelSize) * y) /
    (gY.max - gY.min)
  );
};
