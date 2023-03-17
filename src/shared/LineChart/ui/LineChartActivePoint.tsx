import { ActivePoint } from 'entities/ActivePoint';
import styles from './linechart.module.scss';

interface Props {
  color: string;
  pointRadius: number;
  activePoint: ActivePoint;
}

export const LineChartActivePoint: React.FC<Props> = ({
  activePoint,
  color,
  pointRadius,
}) => {
  const { svgX, svgY } = activePoint;

  return (
    <circle
      className={styles.linechartPoint}
      style={{ stroke: color }}
      r={pointRadius}
      cx={svgX}
      cy={svgY}
    />
  );
};
