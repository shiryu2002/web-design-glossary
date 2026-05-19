import type { DemoProps } from '../../../types';
import styles from './HslDemo.module.css';

export function HslDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.axis}>
        <span className={styles.label}>H</span>
        <div className={styles.hue} />
      </div>
      <div className={styles.axis}>
        <span className={styles.label}>S</span>
        <div className={styles.sat} />
      </div>
      <div className={styles.axis}>
        <span className={styles.label}>L</span>
        <div className={styles.light} />
      </div>
    </div>
  );
}
