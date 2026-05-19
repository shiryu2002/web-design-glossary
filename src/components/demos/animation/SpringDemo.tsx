import type { DemoProps } from '../../../types';
import styles from './SpringDemo.module.css';

export function SpringDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.spring : styles.ease;
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${cls}`}>Card</div>
    </div>
  );
}
