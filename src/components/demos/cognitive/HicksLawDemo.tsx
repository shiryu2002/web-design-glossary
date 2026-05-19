import type { DemoProps } from '../../../types';
import styles from './HicksLawDemo.module.css';

export function HicksLawDemo({ mode = 'after' }: DemoProps) {
  const count = mode === 'after' ? 3 : 9;
  return (
    <div className={styles.stage}>
      <div className={styles.title}>{count} 択 → {mode === 'after' ? '速い' : '遅い'}</div>
      <div className={styles.opts}>
        {Array.from({ length: count }).map((_, i) => (
          <div className={styles.opt} key={i}>選択{i + 1}</div>
        ))}
      </div>
    </div>
  );
}
