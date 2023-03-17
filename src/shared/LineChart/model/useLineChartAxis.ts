import { getSvgX } from '../lib/getSvgX';
import { getSvgY } from '../lib/getSvgY';
import { getX } from '../lib/getX';
import { getY } from '../lib/getY';

import { Point } from 'entities/Point';

export const useLineChartAxis = (
  yLabelSize: number,
  xLabelSize: number,
  svgWidth: number,
  svgHeight: number,
  data: Point[]
) => {
  const { min: minX, max: maxX } = getX(data);
  const { min: minY, max: maxY } = getY(data);

  const xAxisStartX = getSvgX(minX, yLabelSize, svgWidth, data) - yLabelSize;
  const xAxisStartY = getSvgY(minY, xLabelSize, svgHeight, data);
  const xAxisEndX = getSvgX(maxX, yLabelSize, svgWidth, data);
  const xAxisEndY = xAxisStartY;

  const yAxisStartX = xAxisStartX;
  const yAxisStartY = getSvgY(maxY, xLabelSize, svgHeight, data);
  const yAxisEndX = xAxisEndX;
  const yAxisEndY = yAxisStartY;

  return {
    xAxisStartX,
    yAxisStartX,
    xAxisEndY,
    yAxisEndX,
    yAxisEndY,
    xAxisStartY,
    xAxisEndX,
    yAxisStartY,
  };
};
