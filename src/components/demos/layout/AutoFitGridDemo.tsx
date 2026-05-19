import type { DemoProps } from '../../../types';
import styles from './AutoFitGridDemo.module.css';

export function AutoFitGridDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.cell}>{i + 1}</div>
        ))}
      </div>
      <div className={styles.note}>repeat(auto-fit, minmax(56px, 1fr))</div>
    </div>
  );
}
