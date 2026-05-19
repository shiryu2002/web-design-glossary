import type { DemoProps } from '../../../types';
import styles from './ChunkingDemo.module.css';

export function ChunkingDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>{mode === 'after' ? '読みやすい' : '読みにくい'}</div>
      <div className={mode === 'after' ? styles.chunked : styles.raw}>
        {mode === 'after' ? '4567-8901-2345-6789' : '4567890123456789'}
      </div>
    </div>
  );
}
