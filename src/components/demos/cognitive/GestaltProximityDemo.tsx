import type { DemoProps } from '../../../types';
import styles from './GestaltProximityDemo.module.css';

export function GestaltProximityDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.grouped : styles.even;
  return (
    <div className={styles.stage}>
      <div className={cls}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span className={styles.dot} key={i} />
        ))}
      </div>
    </div>
  );
}
