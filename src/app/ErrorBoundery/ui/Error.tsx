import { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './error.module.scss';

export const Error = () => {
  const [remianingTime, setRemianingTime] = useState<number>(60);

  const reloadPage = useCallback(() => {
    window.location.reload();
  }, []);

  const reloadButton = useMemo(
    () => (
      <div className='error--button' onClick={reloadPage}>
        Reload page now
      </div>
    ),
    [reloadPage]
  );

  useEffect(() => {
    const timer = setInterval(
      () => setRemianingTime((prevState) => --prevState),
      1000
    );

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (remianingTime === 1) {
      reloadPage();
    }
  }, [remianingTime, reloadPage]);

  return (
    <div className={styles.error}>
      <div>
        <div className='error--title'>Sorry, something went wrong.</div>
        <div className='error--subtitle'>
          Page will reload after {remianingTime} sec.
        </div>
        <div className='error--button-container'>{reloadButton}</div>
      </div>
    </div>
  );
};
