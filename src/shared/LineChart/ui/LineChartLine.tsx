import styles from './linechart.module.scss';

type Props = {
  svgHeight: number;
  xLabelSize: number;
  hoverLocation: number;
};

export const LineChartLine = ({
  svgHeight,
  xLabelSize,
  hoverLocation,
}: Props) => (
  <line
    className={styles.hoverLine}
    x1={hoverLocation}
    y1={-8}
    x2={hoverLocation}
    y2={svgHeight - xLabelSize}
  />
);
