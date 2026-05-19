import type { DemoProps } from '../../../types';
import styles from './HeatmapDemo.module.css';

const COLS = 14;
const ROWS = 7;
function level(i: number, j: number) {
  const v = (i * 7 + j * 3 + (i % 5) * 11) % 5;
  return v;
}

export function HeatmapDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        {Array.from({ length: ROWS }).map((_r, j) => (
          <div key={j} className={styles.row}>
            {Array.from({ length: COLS }).map((_c, i) => (
              <div
                key={i}
                className={`${styles.cell} ${styles[`l${level(i, j)}`]}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        <span>少</span>
        <div className={`${styles.dot} ${styles.l0}`} />
        <div className={`${styles.dot} ${styles.l1}`} />
        <div className={`${styles.dot} ${styles.l2}`} />
        <div className={`${styles.dot} ${styles.l3}`} />
        <div className={`${styles.dot} ${styles.l4}`} />
        <span>多</span>
      </div>
    </div>
  );
}
