import type { DemoProps } from '../../../types';
import styles from './GradientDemo.module.css';

export function GradientDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.swatch} ${styles.linear}`}>
        <span>Linear</span>
      </div>
      <div className={`${styles.swatch} ${styles.radial}`}>
        <span>Radial</span>
      </div>
      <div className={`${styles.swatch} ${styles.conic}`}>
        <span>Conic</span>
      </div>
    </div>
  );
}
