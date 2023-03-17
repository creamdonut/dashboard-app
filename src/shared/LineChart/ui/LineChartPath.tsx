import { Point } from 'entities/Point';
import { getSvgX } from '../lib/getSvgX';
import { getSvgY } from '../lib/getSvgY';
import { FIRST_ELEMENT } from '../model/consts';
import styles from './linechart.module.scss';

interface Props {
  yLabelSize: number;
  xLabelSize: number;
  svgWidth: number;
  svgHeight: number;
  fetchedData: Point[];
  color: string;
}

export const LineChartPath: React.FC<Props> = ({
  yLabelSize,
  xLabelSize,
  svgWidth,
  svgHeight,
  fetchedData,
  color,
}) => {
  const pathD = fetchedData
    .map(
      (point) =>
        `L ${getSvgX(
          point.xCoordinate,
          yLabelSize,
          svgWidth,
          fetchedData
        )} ${getSvgY(point.yCoordinate, xLabelSize, svgHeight, fetchedData)}`
    )
    .join(' ');
  const startPoint = `M ${getSvgX(
    fetchedData[FIRST_ELEMENT].xCoordinate,
    yLabelSize,
    svgWidth,
    fetchedData
  )} ${getSvgY(
    fetchedData[FIRST_ELEMENT].yCoordinate,
    xLabelSize,
    svgHeight,
    fetchedData
  )}`;

  return (
    <path
      className={styles.linechartPath}
      d={`${startPoint} ${pathD}`}
      style={{ stroke: color }}
    />
  );
};
