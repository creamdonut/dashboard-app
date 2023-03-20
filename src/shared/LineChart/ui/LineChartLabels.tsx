import styles from './linechart.module.scss';

type Props = {
  yLabelSize: number;
  xLabelSize: number;
  svgWidth: number;
  svgHeight: number;
  yMaxLabel?: string;
  yCenteredLabel?: string;
  yMinLabel?: string;
  xMaxLabel?: string;
  xCenteredLabel?: string;
  xMinLabel?: string;
};

export const LineChartLabels = ({
  yLabelSize,
  xLabelSize,
  svgWidth,
  svgHeight,
  yMaxLabel,
  yCenteredLabel,
  yMinLabel,
  xMaxLabel,
  xCenteredLabel,
  xMinLabel,
}: Props) => {
  return (
    <g className={styles.linechartLabel}>
      {/* axis y labels */}
      <text x={yLabelSize / 2} y={20} textAnchor='middle'>
        {yMaxLabel}
      </text>

      <text
        x={yLabelSize / 2}
        y={svgHeight / 2}
        textAnchor='middle'
        transform={`translate(-90,${svgHeight / 2 + 20}) rotate(-90)`}
        // transform={`translate(-90px ${svgHeight / 2}) rotate(-90)`}
      >
        {yCenteredLabel}
      </text>
      <text x={yLabelSize / 2} y={svgHeight - xLabelSize} textAnchor='middle'>
        {yMinLabel}
      </text>
      {/* axis x labels */}
      <text x={yLabelSize} y={svgHeight} textAnchor='start'>
        {xMinLabel}
      </text>
      <text
        x={yLabelSize}
        y={svgHeight}
        textAnchor='start'
        transform={`translate(${svgWidth / 2},0)`}
      >
        {xCenteredLabel}
      </text>
      <text x={svgWidth} y={svgHeight} textAnchor='end'>
        {xMaxLabel}
      </text>
    </g>
  );
};
