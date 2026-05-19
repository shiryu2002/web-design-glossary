import type { DemoProps } from '../../../types';
import styles from './PinchZoomDemo.module.css';

export function PinchZoomDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.image} />
        <span className={`${styles.finger} ${styles.f1}`} />
        <span className={`${styles.finger} ${styles.f2}`} />
      </div>
    </div>
  );
}
