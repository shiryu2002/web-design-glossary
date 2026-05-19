import type { DemoProps } from '../../../types';
import styles from './CounterDemo.module.css';

export function CounterDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.letterWrap}>
          <span className={styles.letter}>O</span>
          <span className={`${styles.dot} ${styles.dotO}`} aria-hidden />
        </span>
        <span className={styles.letterWrap}>
          <span className={styles.letter}>a</span>
          <span className={`${styles.dot} ${styles.dotA}`} aria-hidden />
        </span>
        <span className={styles.letterWrap}>
          <span className={styles.letter}>e</span>
          <span className={`${styles.dot} ${styles.dotE}`} aria-hidden />
        </span>
      </div>
      <div className={styles.note}>counter (内側の空白)</div>
    </div>
  );
}
