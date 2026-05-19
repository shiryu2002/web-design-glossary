import type { DemoProps } from '../../../types';
import styles from './TwoColumnDemo.module.css';

export function TwoColumnDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.main}>
        <div className={styles.title}>Main</div>
        <div className={styles.row} />
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.aside}>
        <div className={styles.titleSm}>Side</div>
        <div className={styles.rowSm} />
        <div className={styles.rowSm} />
      </div>
    </div>
  );
}
