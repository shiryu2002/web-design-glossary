import type { DemoProps } from '../../../types';
import styles from './CapHeightDemo.module.css';

export function CapHeightDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.text}>HEY</span>
        <span className={styles.top} aria-hidden />
        <span className={styles.bottom} aria-hidden />
      </div>
      <div className={styles.note}>cap height</div>
    </div>
  );
}
