import { State, useHomePageModel } from '../model';

import styles from './page.module.scss';

import { Loader } from 'shared/Loader';
import { ViewLineChart } from 'features/ViewLineChart';

export const Home: React.FC = () => {
  const {
    setPickerType,
    pickerType,
    currentState,
    stateData,
    availableButtons,
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
        <div className={styles.chart}>
          <>
            {currentState === State.Idle && 'Choose a type above'}
            {currentState === State.Loading && <Loader />}
            {currentState === State.Error && 'Sorry, an error occured'}
            {currentState === State.Data && stateData.data.length !== 0 && (
              <ViewLineChart fetchedData={stateData.data} />
            )}
          </>
        </div>
      </div>
    </div>
  );
};
