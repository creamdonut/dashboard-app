import React from 'react';
import styles from './center.module.scss';

export const Center = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
