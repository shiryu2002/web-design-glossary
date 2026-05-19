import type { DemoProps } from '../../../types';
import styles from './MaximalismDemo.module.css';

export function MaximalismDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.b1} />
      <div className={styles.b2} />
      <div className={styles.b3} />
      <div className={styles.b4} />
      <div className={styles.b5} />
      <div className={styles.b6} />
      <div className={styles.text}>MORE!</div>
    </div>
  );
}
