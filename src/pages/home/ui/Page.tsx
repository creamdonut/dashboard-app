import { State, SVG_WIDTH, useHomePageModel } from '../model';

import styles from './page.module.scss';

import { LineChart } from 'shared/LineChart';
import { Tooltip } from 'shared/Tooltip';
import { Loader } from 'shared/Loader';

export const Home: React.FC = () => {
  const {
    width,
    onChartHover,
    activePoint,
    hoverLocation,
    lineChartRef,
    setPickerType,
    pickerType,
    currentState,
    stateData,
    availableButtons,
    xLabels,
    yLabels,
  } = useHomePageModel();

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.title}> TONCOIN PRICE HISTORY</div>
        <div className={styles.row}>
          <div className={styles.multiButton}>
            {availableButtons.map((picker) => (
              <button
                key={picker}
                className={
                  pickerType === picker ? styles.multiButtonActive : ''
                }
                onClick={() => setPickerType(picker)}
              >
                {picker}
              </button>
            ))}
          </div>
        </div>
      </div>

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
        <div className={styles.chart}>
          <>
            {currentState === State.Idle && 'Choose a type above'}
            {currentState === State.Loading && <Loader />}
            {currentState === State.Error && 'Sorry, an error occured'}
            {currentState === State.Data && stateData.data.length !== 0 && (
              <LineChart
                fetchedData={stateData.data}
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
            )}
          </>
        </div>
      </div>
    </div>
  );
};
