import { Point } from 'entities/Point';
import styles from './linechart.module.scss';
import { useLineChartLabels } from '../model/useLineChartLabels';

type Props = {
  yLabelSize: number;
  xLabelSize: number;
  svgWidth: number;
  svgHeight: number;
  fetchedData: Point[];
  dateFormat?: string;
};

export const LineChartLabels = ({
  yLabelSize,
  xLabelSize,
  svgWidth,
  svgHeight,
  fetchedData,
  dateFormat = 'DD/MM/YYYY',
}: Props) => {
  const { startDate, endDate, min, max } = useLineChartLabels(
    fetchedData,
    dateFormat
  );

  return (
    <g className={styles.linechartLabel}>
      {/* axis y labels */}
      <text x={yLabelSize / 2} y={20} textAnchor='middle'>
        ${max.toFixed(4)}
      </text>

      <text
        x={yLabelSize / 2}
        y={svgHeight / 2}
        textAnchor='middle'
        transform={`translate(-90,${svgHeight / 2 + 20}) rotate(-90)`}
        // transform={`translate(-90px ${svgHeight / 2}) rotate(-90)`}
      >
        price
      </text>
      <text x={yLabelSize / 2} y={svgHeight - xLabelSize} textAnchor='middle'>
        ${min.toFixed(4)}
      </text>
      {/* axis x labels */}
      <text x={yLabelSize} y={svgHeight} textAnchor='start'>
        {startDate}
      </text>
      <text
        x={yLabelSize}
        y={svgHeight}
        textAnchor='start'
        transform={`translate(${svgWidth / 2},0)`}
      >
        time
      </text>
      <text x={svgWidth} y={svgHeight} textAnchor='end'>
        {endDate}
      </text>
    </g>
  );
};
