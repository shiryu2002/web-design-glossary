import type { DemoProps } from '../../../types';
import styles from './SelectiveAttentionDemo.module.css';

export function SelectiveAttentionDemo(_: DemoProps) {
  const dots = Array.from({ length: 16 });
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        {dots.map((_x, i) => (
          <div key={i} className={i === 6 ? styles.target : styles.dot} />
        ))}
      </div>
      <div className={styles.label}>注意は1点に集中</div>
    </div>
  );
}
