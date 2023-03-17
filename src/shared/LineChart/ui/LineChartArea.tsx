import { useLineChartArea } from '../model/useLineChartArea';
import styles from './linechart.module.scss';

import { Point } from 'entities/Point';

type Props = {
  yLabelSize: number;
  xLabelSize: number;
  svgWidth: number;
  svgHeight: number;
  fetchedData: Point[];
};

export const LineChartArea = ({
  yLabelSize,
  xLabelSize,
  svgWidth,
  svgHeight,
  fetchedData,
}: Props) => {
  const { pathD } = useLineChartArea(
    yLabelSize,
    xLabelSize,
    svgWidth,
    svgHeight,
    fetchedData
  );

  return <path className={styles.linechartArea} d={pathD} />;
};
