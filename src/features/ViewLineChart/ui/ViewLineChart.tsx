import { SVG_WIDTH, useViewLineChart, ViewLineChartProps } from '../model';

import styles from './page.module.scss';

import { LineChart } from 'shared/LineChart';
import { Tooltip } from 'shared/Tooltip';

export const ViewLineChart = ({ fetchedData }: ViewLineChartProps) => {
  const {
    width,
    hoverLocation,
    activePoint,
    onChartHover,
    lineChartRef,
    xLabels,
    yLabels,
  } = useViewLineChart(fetchedData);

  return (
    <>
      <div className={styles.row}>
        <div className={styles.popup}>
          {hoverLocation && activePoint && (
            <Tooltip
              hoverLocation={hoverLocation}
              activePoint={activePoint}
              lineChartRef={lineChartRef}
            />
          )}
        </div>
      </div>
      <div className={styles.row}>
        <LineChart
          fetchedData={fetchedData}
          svgHeight={SVG_WIDTH}
          svgWidth={width}
          onChartHover={(relativeLocation, activePoint) =>
            onChartHover(relativeLocation, activePoint)
          }
          lineChartRef={lineChartRef}
          color='#01a4f5'
          yLabelMin={yLabels?.min}
          yCenteredLabel={yLabels?.center}
          yLabelMax={yLabels?.max}
          xLabelMax={xLabels?.max}
          xCenteredLabel={xLabels?.center}
          xLabelMin={xLabels?.min}
        />
      </div>
    </>
  );
};
