import type { DemoProps } from '../../../types';
import styles from './ChoiceOverloadDemo.module.css';

export function ChoiceOverloadDemo({ mode = 'after' }: DemoProps) {
  const count = mode === 'after' ? 3 : 24;
  return (
    <div className={styles.stage}>
      <div className={styles.label}>{count} 種類 → {mode === 'after' ? '選びやすい' : '迷う'}</div>
      <div className={styles.grid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles.item} />
        ))}
      </div>
    </div>
  );
}
