import type { DemoProps } from '../../../types';
import styles from './BaselineDemo.module.css';

export function BaselineDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.text}>Type</span>
        <span className={styles.baseline} aria-hidden />
      </div>
      <div className={styles.note}>baseline</div>
    </div>
  );
}
