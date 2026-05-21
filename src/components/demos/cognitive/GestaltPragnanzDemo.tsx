import type { DemoProps } from '../../../types';
import styles from './GestaltPragnanzDemo.module.css';

export function GestaltPragnanzDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 200 100" className={styles.svg} preserveAspectRatio="xMidYMid meet">
        <circle className={`${styles.c} ${styles.c1}`} cx="60" cy="42" r="22" />
        <circle className={`${styles.c} ${styles.c2}`} cx="100" cy="42" r="22" />
        <circle className={`${styles.c} ${styles.c3}`} cx="140" cy="42" r="22" />
        <circle className={`${styles.c} ${styles.c4}`} cx="80" cy="68" r="22" />
        <circle className={`${styles.c} ${styles.c5}`} cx="120" cy="68" r="22" />
      </svg>
      <div className={styles.label}>複雑な重なり → 「5つの円」と認識</div>
    </div>
  );
}
