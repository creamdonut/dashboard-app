import { ReactComponent as LoadingIcon } from 'shared/icons/loading/Loading.svg';
import styles from './loader.module.scss';

export const Loader = () => {
  return <LoadingIcon className={styles.rotate} />;
};
