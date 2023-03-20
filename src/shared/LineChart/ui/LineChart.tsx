import React from 'react';

import styles from './linechart.module.scss';
import {
  DEFAULT_COLOR,
  DEFAULT_POINT_RADIUS,
  DEFAULT_SVG_HEIGHT,
  DEFAULT_SVG_WIDTH,
  DEFAULT_X_LABEL_SIZE,
  DEFAULT_Y_LABEL_SIZE,
} from '../model';
import { useLineChartModel } from '../model/useLineChartModel';

import { LineChartActivePoint } from './LineChartActivePoint';
import { LineChartArea } from './LineChartArea';
import { LineChartAxis } from './LineChartAxis';
import { LineChartLabels } from './LineChartLabels';
import { LineChartLine } from './LineChartLine';
import { LineChartPath } from './LineChartPath';

import { ActivePoint } from 'entities/ActivePoint';
import { Point } from 'entities/Point';

type Props = {
  fetchedData: Point[];
  lineChartRef: React.RefObject<SVGSVGElement>;
  onChartHover: (
    relativeLoc: number | null,
    closestPoint: ActivePoint | null
  ) => void;
  color?: string;
  pointRadius?: number;
  svgHeight?: number;
  svgWidth?: number;
  xLabelSize?: number;
  yLabelSize?: number;
  yLabelMax?: string;
  yCenteredLabel?: string;
  yLabelMin?: string;
  xLabelMax?: string;
  xCenteredLabel?: string;
  xLabelMin?: string;
};

export const LineChart: React.FC<Props> = ({
  fetchedData = [],
  color = DEFAULT_COLOR,
  pointRadius = DEFAULT_POINT_RADIUS,
  svgHeight = DEFAULT_SVG_HEIGHT,
  svgWidth = DEFAULT_SVG_WIDTH,
  xLabelSize = DEFAULT_X_LABEL_SIZE,
  yLabelSize = DEFAULT_Y_LABEL_SIZE,
  yLabelMax,
  yLabelMin,
  xLabelMax,
  xLabelMin,
  yCenteredLabel,
  xCenteredLabel,
  lineChartRef,
  onChartHover,
}) => {
  const {
    onCoordinatesChange,
    onMouseLeave,
    activePoint,
    hoverLocation,
    viewBox,
  } = useLineChartModel(
    fetchedData,
    svgWidth,
    svgHeight,
    yLabelSize,
    xLabelSize,
    lineChartRef,
    onChartHover
  );

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      className={styles.linechart}
      onMouseLeave={onMouseLeave}
      onMouseMove={onCoordinatesChange}
      ref={lineChartRef}
    >
      <g>
        <>
          <LineChartAxis
            yLabelSize={yLabelSize}
            xLabelSize={xLabelSize}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            fetchedData={fetchedData}
          />
          <LineChartPath
            yLabelSize={yLabelSize}
            xLabelSize={xLabelSize}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            fetchedData={fetchedData}
            color={color}
          />
          <LineChartArea
            yLabelSize={yLabelSize}
            xLabelSize={xLabelSize}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            fetchedData={fetchedData}
          />
          <LineChartLabels
            yLabelSize={yLabelSize}
            xLabelSize={xLabelSize}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            yMaxLabel={yLabelMax}
            yCenteredLabel={yCenteredLabel}
            yMinLabel={yLabelMin}
            xMaxLabel={xLabelMax}
            xCenteredLabel={xCenteredLabel}
            xMinLabel={xLabelMin}
          />
          {hoverLocation && (
            <LineChartLine
              svgHeight={svgHeight}
              xLabelSize={xLabelSize}
              hoverLocation={hoverLocation}
            />
          )}
          {hoverLocation && activePoint && (
            <LineChartActivePoint
              activePoint={activePoint}
              color={color}
              pointRadius={pointRadius}
            />
          )}
        </>
      </g>
    </svg>
  );
};
