import type { DemoProps } from '../../../types';
import styles from './ParallaxDemo.module.css';

export function ParallaxDemo({ mode = 'after' }: DemoProps) {
  const isAfter = mode === 'after';
  return (
    <div className={styles.scene}>
      <div className={`${styles.layer} ${styles.sky}`} />
      <div
        className={`${styles.layer} ${styles.farMountain} ${isAfter ? styles.driftSlow : styles.driftMedium}`}
      />
      <div
        className={`${styles.layer} ${styles.midMountain} ${styles.driftMedium}`}
      />
      <div
        className={`${styles.layer} ${styles.tree} ${isAfter ? styles.driftFast : styles.driftMedium}`}
      />
    </div>
  );
}
