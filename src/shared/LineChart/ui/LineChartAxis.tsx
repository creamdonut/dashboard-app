import styles from './linechart.module.scss';
import { useLineChartAxis } from '../model/useLineChartAxis';
import { AXIS_LINE_COLOR, AXIS_DASH_ARRAY } from '../model';

import { Point } from 'entities/Point';

type Props = {
  yLabelSize: number;
  xLabelSize: number;
  svgWidth: number;
  svgHeight: number;
  fetchedData: Point[];
};

export const LineChartAxis = ({
  yLabelSize,
  xLabelSize,
  svgWidth,
  svgHeight,
  fetchedData,
}: Props) => {
  const {
    xAxisStartX,
    yAxisStartX,
    xAxisEndY,
    yAxisEndX,
    yAxisEndY,
    xAxisStartY,
    xAxisEndX,
    yAxisStartY,
  } = useLineChartAxis(
    yLabelSize,
    xLabelSize,
    svgWidth,
    svgHeight,
    fetchedData
  );

  return (
    <g className={styles.linechartAxis}>
      {/* X-axis */}
      <line
        x1={xAxisStartX}
        y1={xAxisStartY}
        x2={xAxisEndX}
        y2={xAxisEndY}
        stroke={AXIS_LINE_COLOR}
        strokeDasharray={AXIS_DASH_ARRAY}
      />
      {/* Y-axis */}
      <line
        x1={yAxisStartX}
        y1={yAxisStartY}
        x2={yAxisEndX}
        y2={yAxisEndY}
        stroke={AXIS_LINE_COLOR}
        strokeDasharray={AXIS_DASH_ARRAY}
      />
    </g>
  );
};
