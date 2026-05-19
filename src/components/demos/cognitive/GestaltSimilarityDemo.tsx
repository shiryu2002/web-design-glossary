import type { DemoProps } from '../../../types';
import styles from './GestaltSimilarityDemo.module.css';

export function GestaltSimilarityDemo(_: DemoProps) {
  const grid = [
    'a', 'a', 'b', 'a', 'a',
    'a', 'a', 'b', 'a', 'a',
    'a', 'a', 'b', 'a', 'a',
  ];
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        {grid.map((kind, i) => (
          <span key={i} className={kind === 'a' ? styles.circle : styles.square} />
        ))}
      </div>
    </div>
  );
}
