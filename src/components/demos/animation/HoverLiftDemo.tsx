import type { DemoProps } from '../../../types';
import styles from './HoverLiftDemo.module.css';

export function HoverLiftDemo({ mode = 'after' }: DemoProps) {
  const cls = mode === 'after' ? styles.lifting : styles.flat;
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${cls}`}>
        <div className={styles.icon}>★</div>
        <div className={styles.label}>Card</div>
      </div>
    </div>
  );
}
