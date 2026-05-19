import type { DemoProps } from '../../../types';
import styles from './XHeightDemo.module.css';

export function XHeightDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.text}>nox</span>
        <span className={styles.guideTop} aria-hidden />
        <span className={styles.guideBase} aria-hidden />
      </div>
      <div className={styles.note}>x-height</div>
    </div>
  );
}
