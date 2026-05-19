import type { DemoProps } from '../../../types';
import styles from './ConicSweepDemo.module.css';

export function ConicSweepDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.radar}>
        <div className={styles.sweep} />
        <span className={styles.center} />
      </div>
    </div>
  );
}
