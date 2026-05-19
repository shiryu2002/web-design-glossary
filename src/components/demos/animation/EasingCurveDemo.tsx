import type { DemoProps } from '../../../types';
import styles from './EasingCurveDemo.module.css';

export function EasingCurveDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.tag}>linear</span>
        <div className={styles.track}><div className={`${styles.ball} ${styles.linear}`} /></div>
      </div>
      <div className={styles.row}>
        <span className={styles.tag}>ease-in</span>
        <div className={styles.track}><div className={`${styles.ball} ${styles.easeIn}`} /></div>
      </div>
      <div className={styles.row}>
        <span className={styles.tag}>ease-out</span>
        <div className={styles.track}><div className={`${styles.ball} ${styles.easeOut}`} /></div>
      </div>
    </div>
  );
}
