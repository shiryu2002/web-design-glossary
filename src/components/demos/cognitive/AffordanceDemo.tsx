import type { DemoProps } from '../../../types';
import styles from './AffordanceDemo.module.css';

export function AffordanceDemo({ mode = 'after' }: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={mode === 'after' ? styles.btn : styles.flat}>クリック</div>
      <div className={styles.label}>
        {mode === 'after' ? '押せそうに見える' : '押せるか不明'}
      </div>
    </div>
  );
}
