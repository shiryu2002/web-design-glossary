import type { DemoProps } from '../../../types';
import styles from './SpotlightDemo.module.css';

export function SpotlightDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div className={styles.cell} key={i}>{i + 1}</div>
        ))}
      </div>
      <div className={styles.light} />
    </div>
  );
}
