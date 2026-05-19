import type { DemoProps } from '../../../types';
import styles from './AscenderDemo.module.css';

export function AscenderDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.letter}>
          <span className={styles.top}>b</span>
        </span>
        <span className={styles.letter}>
          <span className={styles.top}>d</span>
        </span>
        <span className={styles.letter}>
          <span className={styles.top}>h</span>
        </span>
        <span className={styles.guide} aria-hidden />
      </div>
      <div className={styles.note}>ascender</div>
    </div>
  );
}
