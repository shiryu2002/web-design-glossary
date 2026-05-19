import type { DemoProps } from '../../../types';
import styles from './MillersLawDemo.module.css';

export function MillersLawDemo({ mode = 'after' }: DemoProps) {
  const digits = '09012345678';
  return (
    <div className={styles.stage}>
      {mode === 'after' ? (
        <div className={styles.chunked}>
          <span className={styles.chunk}>090</span>
          <span className={styles.sep}>-</span>
          <span className={styles.chunk}>1234</span>
          <span className={styles.sep}>-</span>
          <span className={styles.chunk}>5678</span>
        </div>
      ) : (
        <div className={styles.raw}>{digits}</div>
      )}
      <div className={styles.label}>
        {mode === 'after' ? '3チャンク → 覚えやすい' : '11桁 → 覚えにくい'}
      </div>
    </div>
  );
}
