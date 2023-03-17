import { Point } from 'entities/Point';
import { getSvgX } from '../lib/getSvgX';
import { getSvgY } from '../lib/getSvgY';
import { getX } from '../lib/getX';
import { getY } from '../lib/getY';
import { FIRST_ELEMENT } from './consts';

export const useLineChartArea = (
  yLabelSize: number,
  xLabelSize: number,
  svgWidth: number,
  svgHeight: number,
  data: Point[]
) => {
  const pathD =
    `M ${getSvgX(
      data[FIRST_ELEMENT].xCoordinate,
      yLabelSize,
      svgWidth,
      data
    )} ${getSvgY(
      data[FIRST_ELEMENT].yCoordinate,
      xLabelSize,
      svgHeight,
      data
    )} ` +
    data
      .map(
        (point) =>
          `L ${getSvgX(
            point.xCoordinate,
            yLabelSize,
            svgWidth,
            data
          )} ${getSvgY(point.yCoordinate, xLabelSize, svgHeight, data)} `
      )
      .join('') +
    `L ${getSvgX(getX(data).max, yLabelSize, svgWidth, data)} ${getSvgY(
      getY(data).min,
      xLabelSize,
      svgHeight,
      data
    )} ` +
    `L ${getSvgX(getX(data).min, yLabelSize, svgWidth, data)} ${getSvgY(
      getY(data).min,
      xLabelSize,
      svgHeight,
      data
    )} `;

  return { pathD };
};
