import type { DemoProps } from '../../../types';
import styles from './AuroraUiDemo.module.css';

export function AuroraUiDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.aurora1} />
      <div className={styles.aurora2} />
      <div className={styles.aurora3} />
      <div className={styles.card}>
        <div className={styles.title}>Aurora</div>
        <div className={styles.sub}>flowing northern lights</div>
      </div>
    </div>
  );
}
