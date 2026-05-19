import type { DemoProps } from '../../../types';
import styles from './RubberBandDemo.module.css';

export function RubberBandDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.rubber : styles.hard;
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={`${styles.content} ${cls}`}>
          <div className={styles.row} />
          <div className={styles.row} />
          <div className={styles.row} />
        </div>
      </div>
    </div>
  );
}
