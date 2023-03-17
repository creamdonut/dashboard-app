import { Center } from 'shared/Center';

import { ReactComponent as LoadingIcon } from 'shared/icons/loading/Loading.svg';
import styles from './suspense.module.scss';

export const SuspenseFallback = () => {
  return (
    <Center>
      <LoadingIcon className={styles.rotate} />
    </Center>
  );
};
